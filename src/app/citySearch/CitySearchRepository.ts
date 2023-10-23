import { Model } from "mongoose";
import { CitySearch, TypeCitySearch } from "./CitySearch";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";

class CitySearchRepository {
  constructor(private model: Model<TypeCitySearch>) {}

  async find(query: any) {
    try {
      return this.model.find(query);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopTechnology() {
    const topTechs = await this.model.find().sort({ count: -1 }).limit(1);
    if (!topTechs || topTechs.length === 0) {
      throw new Error("No technology found");
    }
    return topTechs[0].technology;
  }

  async getTop5CitiesForMostSearchedTech(technology: string) {
    try {
      return await this.model.find({ technology }).sort({ count: -1 }).limit(5);
    } catch (erro: any) {
      //     return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
      //   }
    }

    // async sortAndLimit(query: any, sortField: string, limit: number) {
    //   try {
    //     return query.sort({ [sortField]: -1 }).limit(limit);
    //   } catch (erro: any) {
    //     return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    //   }
    // }

    // async getTop5CitiesForMostSearchedTech(tech: string) {
    //   try {
    //     const query = this.model.find({ technology: tech });
    //     return this.sortAndLimit(query, 'count', 5);
    //   } catch (erro: any) {
    //     return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    //   }
    // }
  }
}

export { CitySearchRepository };
