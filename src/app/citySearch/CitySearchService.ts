import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TechSearchService } from "../techSearch/TechSearchService";
import { CitySearchRepository } from "./CitySearchRepository";

class CitySearchService {
  constructor(
    private citySearchRepository: any,
    private techSearchService: any
  ) {}

  async getTop5Cities() {
    try {
      const cities = await this.citySearchRepository.find({});
      cities.sort(
        (a: { count: number }, b: { count: number }) => b.count - a.count
      );
      return cities.slice(0, 5).map((city: { name: any }) => city.name);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTop5CitiesForMostSearchedTech() {
    //const topTechnology = await this.techSearchService.getTop5Technologies();
    try {
      const topTech = await this.citySearchRepository.getTopTechnology();
      return await this.citySearchRepository.getTopCitiesForTechnology(topTech);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { CitySearchService };
