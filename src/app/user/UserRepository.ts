import { Model, Document } from "mongoose";
import { TypeUser } from "./User";
import { CommonError, CommonErrorResponse } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";


// interface FindByEmailSuccessResponse {
//     id: string;
//     name: string;
//     email: string;
//     password: string;
//     createdAt: string | Date ;
//     updatedAt: string | Date;
//   }

class UserRepository{
    constructor(private model:Model<TypeUser>){}


    async findByEmail(email:string){
        try{
            return this.model.findOne({email})
        }
        catch(erro: any){
            return  CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        }
    }

    async create(data: TypeUser){
        try{
            return this.model.create(data)
        }
        catch(erro: any){
            return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        }
    }

    async update(id: string, data: TypeUser){
try{
    return this.model.findByIdAndUpdate(id, data)
}
catch(erro: any){
    return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
}

    async findById(id:string){
        try {
            return this.model.findOne({_id: id})
        }
        catch(erro: any){
            return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        }    

    }

    


}
export {UserRepository}