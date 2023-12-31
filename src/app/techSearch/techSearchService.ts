import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeTechSearch } from "./TechSearch";

class TechSearchService {
  constructor(private techSearchRepository: any) {}

  async registerTechSearch(technology: string, city: string) {
    try {
      const existingRecord = await this.techSearchRepository.findOne({
        technology,
        city,
      });
      if (existingRecord) {
        existingRecord.count += 1;
        await existingRecord.save();
      } else {
        await this.techSearchRepository.create({
          technology,
          city,
          count: 1,
        });
      }

      return existingRecord;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopTechnologies(limit: number = 5) {
    try {
      return this.techSearchRepository.getTopTechnologies(limit);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async getTopCitiesForMostSearchedTech() {
    try {
      return this.techSearchRepository.getTopCitiesForMostSearchedTech();
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
  async searchTechAndCity(technology: string, city: string) {
    const count = await this.techSearchRepository.getSearchCount(
      technology,
      city
    );

    if (count !== null) {
      await this.techSearchRepository.incrementSearchCount(technology, city);
      return count + 1;
    } else {
      await this.techSearchRepository.createSearchCount(technology, city);
      return 1;
    }
  }

  async searchTech(query: any, startIndex: number, perPage: number) {
    try {
      const results = await this.techSearchRepository.searchTech(
        query,
        startIndex,
        perPage
      );
      return results;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { TechSearchService };
