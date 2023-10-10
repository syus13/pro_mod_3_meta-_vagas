import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { UserRepository } from "../user/UserRepository";


class AuthService{
    constructor( private repository: UserRepository){}
    
    
    async login (data: any){
        const userAlreadyExists = await this.repository.findByEmail(data.email)
        if(!userAlreadyExists){
            return CommonError.build(userAlreadyExists.message, STATUS_CODE.NOT_FOUND)
            
    }

    }
}

export AuthService