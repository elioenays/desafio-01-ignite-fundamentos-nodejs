import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default class TaskService {
  async create(data) {
    const task = await prisma.task.create(data)

    return task
  }

  async findOne(id) {
    const task = await prisma.task.findUnique(id)

    return task
  }

  async findAll() {
    const tasks = await prisma.task.findMany()

    return tasks
  }

  async update(id) {}

  async delete(id) {}

  async completeTask(id) {}
}
