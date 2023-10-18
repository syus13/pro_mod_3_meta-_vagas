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

  async sortAndLimit(query: any, sortField: string, limit: number) {
    try {
      return query.sort({ [sortField]: -1 }).limit(limit);
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopTechnologies(limit: number = 5) {
    try {
      const topTechnologies = await this.model
        .find({})
        .sort({ count: -1 })
        .limit(limit);

      return topTechnologies;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopCitiesForMostSearchedTech(limit: number = 5) {
    try {
      const topCities = await this.model
        .find({ technology: { $ne: "" } })
        .sort({ count: -1 })
        .limit(limit);

      return topCities;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getSearchCount(technology: string, city: string) {
    const searchRecord = await this.model.findOne({ technology, city });

    return searchRecord ? searchRecord.count : null;
  }

  async incrementSearchCount(technology: string, city: string) {
    return this.model.findOneAndUpdate(
      { technology, city },
      { $inc: { count: 1 } }
    );
  }

  async createSearchCount(technology: string, city: string) {
    return this.model.create({ technology, city, count: 1 });
  }

  async searchTech(query: any, startIndex: number, perPage: number) {
    try {
      const { technology, city } = query;
      const filter: any = {};

      if (technology) {
        filter.technology = technology;
      }

      if (city) {
        filter.city = city;
      }

      const results = await this.model.find(filter).skip(startIndex).limit(perPage);
      return results;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async searchTechAndCity(technology: string, city: string) {
    try {
      const record = await this.model.findOne({ technology, city });
      return record ? record.count : 0;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

}

export { TechSearchRepository };