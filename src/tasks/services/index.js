import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class TaskService {
  async create(title, description) {
    const task = await prisma.task.create({
      data: { title, description, completed_at: null },
    })

    return task
  }

  async findOne(id) {
    const task = await prisma.task.findUnique({ where: { id } })

    if (!task) {
      throw new Error('Task not found!')
    }

    return task
  }

  async findAll(title, description) {
    console.log(description)

    if (title !== undefined) {
      const tasks = await prisma.task.findMany({
        where: { title: { contains: title } },
      })

      return tasks
    }

    if (description !== undefined) {
      const tasks = await prisma.task.findMany({
        where: { description: { contains: description } },
      })

      return tasks
    }

    const tasks = await prisma.task.findMany()

    return tasks
  }

  async update(id, title, description) {
    await this.findOne(id)

    const task = await prisma.task.update({
      where: { id },
      data: { title, description },
    })

    return task
  }

  async delete(id) {
    await this.findOne(id)

    const task = await prisma.task.delete({ where: { id } })

    return task
  }

  async completeTask(id) {
    const task = await this.findOne(id)

    if (task.completed_at === null) {
      await prisma.task.update({
        where: { id },
        data: { completed_at: new Date() },
      })
    } else {
      await prisma.task.update({
        where: { id },
        data: { completed_at: null },
      })
    }

    return task
  }
}
