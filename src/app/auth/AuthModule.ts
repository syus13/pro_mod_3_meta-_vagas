import { User } from "../user/User";
import { UserRepository } from "../user/UserRepository";
import { AuthService } from "./AuhtService";
import { AuthController } from "./AuthController";

class AuthModule{
    static getInstance(){
        const userRepository = new UserRepository(User)
        const service = new AuthService(userRepository)
        const controller = new AuthController(service)

        return {userRepository, service, controller}
    }
}

export {AuthModule}