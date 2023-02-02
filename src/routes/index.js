import { Router } from 'express'
import taskRoutes from '../tasks/index.js'

const routes = Router()

routes.use('/tasks', taskRoutes)

export default routes
