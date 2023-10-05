import {Crypt} from "../../utils/Crypt"

class UserService{
    constructor (private repository: UserRepository){}
    async create(data:any){
        const userAlreadyExists = await this.repository.findByemail(data.email)
        if(userAlreadyExists){
            return{
                error: true,
                message: "Usuário já existe",
                status: 400
        }
    }

    const user = {
        ...data,
        password: Crypt.encrypt(data.password)
    }

    return this.repository.create(user)
}

async findAll(){
    return this.repository.findAll()
}
}

export{UserService}