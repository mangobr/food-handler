import {Router} from 'express'
import { CreateInstanceController } from './controllers/account/CreateInstanceController'

const router = Router()

const createInstanceController = new CreateInstanceController()

router.post('/instance/create', createInstanceController.handleCreate)

export { router}