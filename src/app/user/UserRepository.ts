import { Model, Document } from "mongoose";
import { TypeUser } from "./User";
import { CommonError, CommonErrorResponse } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";

class UserRepository {
  searchRecord(filters: any, jobAlreadyExists: any) {
    throw new Error("Method not implemented.");
  }
  constructor(private model: Model<TypeUser>) {}

  async findByEmail(email: string) {
    try {
      return this.model.findOne({ email });
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: TypeUser) {
    try {
      return this.model.create(data);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, data: TypeUser) {
    try {
      return this.model.findByIdAndUpdate(id, data);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async findById(id: string) {
    try {
      return this.model.findOne({ _id: id });
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getFavoriteJobs(user: TypeUser) {
    try {
      return await this.model.find({ _id: { $in: user.favoritedBy } });
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getUserSearchHistory(user: TypeUser) {
    try {
      return user.searchHistory;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}
export { UserRepository };
