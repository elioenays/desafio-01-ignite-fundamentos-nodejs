import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class TaskService {
  async create(title, description) {
    const task = await prisma.task.create({ data: { title, description } })

    return task
  }

  async findOne(id) {
    const task = await prisma.task.findUnique({ where: { id } })

    return task
  }

  async findAll() {
    const tasks = await prisma.task.findMany()

    return tasks
  }

  async update(id, title, description) {
    const task = await this.findOne(id)
  }

  async delete(id) {
    const task = await prisma.task.delete({ where: { id } })

    return task
  }

  async completeTask(id) {}
}
