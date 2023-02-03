import { Router } from 'express'
import TaskController from './controller/index.js'

const taskRoutes = Router()

const taskController = new TaskController()

taskRoutes.get('/', taskController.findAll)
taskRoutes.post('/', taskController.create)
taskRoutes.delete('/:id', taskController.delete)
taskRoutes.put('/:id', taskController.update)
taskRoutes.patch('/:id', taskController.completeTask)

export default taskRoutes
