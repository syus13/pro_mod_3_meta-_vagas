import {Request, Response} from "express"
import { UserValidate } from "../../utils/Validations/UserValidate"
import { CommonError } from "../../utils/CommonError"
import { STATUS_CODE } from "../../utils/statusCode"
import { UserService } from "./UserService"

class UserController{
    constructor( private service: UserService){}

    async create (req: Request, res: Response){
        const {body} = req

        const bodyIsValid = await UserValidate.isValid(body)
    if(bodyIsValid && bodyIsValid.error) {
      return res.status(400).json(CommonError.build(bodyIsValid.messages, 400))
    }
    const user = await this.service.create(body)
    if('error' in user){
        return res.status(user.status).json(user)
    }

    return res.status(201).json(user)
    }

    async findAll(req: Request, res: Response){
        const result = await this.service.findAll()
        if('error' in result){
            return res.status(result.status).json(result)
        }
        return res.status(STATUS_CODE.OK).json(result)
    }
}

export{UserController}