import TaskService from '../services/index.js'

const taskService = new TaskService()
export default class TaskController {
  async create(request, response) {
    const { title, description } = request.body

    const task = taskService.create(title, description)

    return response.json({ title, description })
  }

  async findOne(request, response) {
    const { id } = request.params

    const task = await taskService.findOne(id)

    return response.json(task)
  }

  async findAll(request, response) {
    const tasks = await taskService.findAll()

    return response.json(tasks)
  }

  async update(request, response) {}

  async delete(request, response) {
    const { id } = request.params

    await taskService.delete(id)

    return response.end()
  }

  async completeTask(request, response) {}
}
