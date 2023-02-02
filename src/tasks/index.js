import { Router } from 'express'
import TaskController from './controller'

const taskRoutes = Router()

const taskController = new TaskController()

taskRoutes.get('/:id', taskController.findOne)
taskRoutes.get('/', taskController.findAll)
taskRoutes.post('/', taskController.create)
taskRoutes.delete('/:id', taskController.delete)
taskRoutes.patch('/:id', taskController.completeTask)

export default taskRoutes
