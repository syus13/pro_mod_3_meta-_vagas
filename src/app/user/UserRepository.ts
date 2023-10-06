import { Model, Document } from "mongoose";
import { TypeUser } from "./User";
import { CommonError, CommonErrorResponse } from "../../utils/CommonError";


interface FindByEmailSuccessResponse {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string | Date ;
    updatedAt: string | Date;
  }

class UserRepository{
    constructor(private model:Model<TypeUser>){}
    async findByEmail(email:string):Promise<Document<FindByEmailSuccessResponse> | CommonErrorResponse | null>{
        try{
            return this.model.findOne({email}).select("*password")
        }
        catch(erro: any){
            return  CommonError.build(erro.message, 500)
        }
    }

    async create(data: TypeUser){
        try{
            return this.model.create(data)
        }
        catch(erro: any){
            return CommonError.build(erro.message, 500)
        }
    }

}
export {UserRepository}