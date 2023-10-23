import { Model } from "mongoose";
import { TechSearch, TypeTechSearch } from "./TechSearch";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { CitySearch } from "../citySearch/CitySearch";

class TechSearchRepository {
  constructor(private model: Model<TypeTechSearch>) {}

  async findOne(query: any) {
    try {
      return this.model.findOne(query);
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async create(data: TypeTechSearch) {
    try {
      return this.model.create(data);
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async find(query: any) {
    try {
      return this.model.find(query);
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopTechnologies() {
    try {
      return await this.model.find().sort({ count: -1 }).limit(5);
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}
export { TechSearchRepository };
