import { Model } from "mongoose";
import { TypeUser } from "./User";


class UserRepository{
    constructor(private model:Model<TypeUser>){}


    async findByEmail(email:string){   
            return this.model.findOne({email})    
    }

    async create(data: TypeUser){        
            return this.model.create(data)     
    }

    async update(id: string, data: TypeUser){
    return this.model.findByIdAndUpdate(id, data)
}



    async findById(id:string){       
            return this.model.findOne({_id: id})
        }
    

    }

export {UserRepository}