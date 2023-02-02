import { Router } from 'express'
import taskRoutes from '../tasks'

const routes = Router()

routes.use('/tasks', taskRoutes)

export default routes
