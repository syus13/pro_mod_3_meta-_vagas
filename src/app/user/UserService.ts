import { CommonError } from "../../utils/CommonError"
import {Crypt} from "../../utils/Crypt"
import { STATUS_CODE } from "../../utils/statusCode"
import { TypeUser } from "./User"

class UserService{
    constructor (private repository: any){}

    async create(data:TypeUser){
        const userAlreadyExists = await this.repository.findByEmail(data.email)
        if(userAlreadyExists){
            return CommonError.build(userAlreadyExists.message, STATUS_CODE.CONFLICT)
            
    }

    const user = {
        ...data,
        password: Crypt.encrypt(data.password)
    }

    return this.repository.create(user)
}

async update(id: string, data: TypeUser) {

    try {
        const userAlreadyExists = await this.repository.findById(id)
        if (!userAlreadyExists) {
            return CommonError.build(userAlreadyExists.message, STATUS_CODE.NOT_FOUND)
        }
        const updated = {
            name: data.name,
            password: Crypt.encrypt(data.password),
            email: data.email
        }

        return await this.repository.update(id, updated)

    } catch (erro: any) {
        return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
    }
}

async markJobAsFavorite(userId: string, jobId: string) {
    try {
      const user = await this.repository.findById(userId);
      if (!user) {
        return CommonError.build(user.message, STATUS_CODE.NOT_FOUND);
      }

           if (!user.favoriteJobs.includes(jobId)) {
        user.favoriteJobs.push(jobId); // Adicione a vaga à lista de favoritos
      }

      const result = await this.repository.update(userId, user);

      if (!result) {
        return CommonError.build(result.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      }

      return result;
    } catch (erro: any) {
           return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getSearchHistory(userId: string, page: string, perPage: string) {
    try {
      const user = await this.repository.findById(userId);
      if (!user) {
        return [];
      }

      const pageInt = parseInt(page, 10) || 1;
      const perPageInt = parseInt(perPage, 10) || 10;

           const startIndex = (pageInt - 1) * perPageInt;
      const endIndex = pageInt * perPageInt;
      const searchHistory = user.searchHistory.slice(startIndex, endIndex);

      return searchHistory;
    } catch (error) {
      console.error(error);
      return [];
    }
  }


}

export{UserService}