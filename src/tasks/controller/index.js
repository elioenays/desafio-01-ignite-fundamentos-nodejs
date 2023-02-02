import TaskService from '../services/index.js'

const taskService = new TaskService()
export default class TaskController {
  async create(request, response) {
    const { data } = request.body
    console.log(data)
    console.log(request.body)
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

  async delete(request, response) {}

  async completeTask(request, response) {}
}
