import {Router} from 'express'
import { UserModule } from '../app/user/UserModule'
import { AuthMiddleware } from '../app/middleware/AuthMiddleware'


const userRoutes = Router()
const {controller} = UserModule.getInnstance()

userRoutes.post("/", controller.create.bind(controller))
userRoutes.put("/:id", AuthMiddleware.handler,controller.update.bind(controller))

export {userRoutes}