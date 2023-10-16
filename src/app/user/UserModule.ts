import { User } from "./User";
import { UserController } from "./UserController";
import { UserRepository } from "./UserRepository";
import { UserService } from "./UserService";


class UserModule{
    static getInnstance(){
         const repository = new UserRepository(User)
         const service =  new UserService(repository)
         const controller = new UserController(service)

         return{repository, service, controller}
    }

}

export { UserModule}