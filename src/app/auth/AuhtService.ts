import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import {Crypt} from "../../utils/Crypt"
import JWT from "jsonwebtoken"


class AuthService{
    constructor( private repository: any){}
    
    
    async login (data: any){
        const userAlreadyExists = await this.repository.findByEmail(data.email)
        if(!userAlreadyExists){
            return CommonError.build("invalid email or password ", STATUS_CODE.BAD_REQUEST)
            
    }

    const passwordIsValid = Crypt.compare(data.password, userAlreadyExists.password)
    if(!passwordIsValid){
        return CommonError.build("invalid email or password ", STATUS_CODE.BAD_REQUEST)
    }

    const payload = {...userAlreadyExists}
    const secretKey = process.env.JWT_SECRET_KEY as string
    const options = {expiresIn: '20m'}
    const token = JWT.sign(payload, secretKey, options)
    return {token, user: userAlreadyExists}
}
}

export{AuthService}