import { CommonError } from "../../utils/CommonError";
import { Crypt } from "../../utils/Crypt";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeUser } from "./User";

class UserService {
  constructor(private repository: any) {}

  async create(data: TypeUser) {
    const userAlreadyExists = await this.repository.findByEmail(data.email);
    if (userAlreadyExists) {
      return CommonError.build(userAlreadyExists.message, STATUS_CODE.CONFLICT);
    }

    const user = {
      ...data,
      password: Crypt.encrypt(data.password),
    };

    return this.repository.create(user);
  }

  async update(id: string, data: TypeUser) {
    try {
      const userAlreadyExists = await this.repository.findById(id);
      if (!userAlreadyExists) {
        return CommonError.build(
          userAlreadyExists.message,
          STATUS_CODE.NOT_FOUND
        );
      }
      const updated = {
        name: data.name,
        password: Crypt.encrypt(data.password),
        email: data.email,
      };

      return await this.repository.update(id, updated);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getFavoriteJobs(userId: string) {
    try {
      const user = await this.repository.findById(userId);
      if (!user) {
        return CommonError.build("User not found", STATUS_CODE.NOT_FOUND);
      }
      const favoriteJobs = await this.repository.getFavoriteJobs(user);
      return favoriteJobs || [];
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getUserSearchHistory(userId: string) {
    try {
      const user = await this.repository.findById(userId);
      if (!user) {
        return CommonError.build("User not found", STATUS_CODE.NOT_FOUND);
      }
      const searchHistory = await this.repository.getUserSearchHistory(user);
      return searchHistory || [];
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { UserService };
