import TaskService from '../services/index.js'

const taskService = new TaskService()
export default class TaskController {
  async create(request, response) {
    const { title, description } = request.body

    const task = await taskService.create(title, description)

    return response.json(task)
  }

  async findAll(request, response) {
    const { title, description } = request.query

    const tasks = await taskService.findAll(title, description)

    return response.json(tasks)
  }

  async update(request, response) {
    const { id } = request.params
    const { title, description } = request.body

    const task = await taskService
      .update(id, title, description)
      .catch(error => {
        response.status(404).json(error.message)
      })

    return response.json(task)
  }

  async delete(request, response) {
    const { id } = request.params

    await taskService.delete(id).catch(error => {
      response.status(404).json(error.message)
    })

    return response.end()
  }

  async completeTask(request, response) {
    const { id } = request.params

    const task = await taskService.completeTask(id).catch(error => {
      response.status(404).json(error.message)
    })

    console.log(task)

    return response.json(task)
  }
}
