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

      } catch (erro: any) {
      return CommonError.build(
        erro.message,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getTopTechnologies(limit: number = 5) {
    try {
      return this.techSearchRepository.getTopTechnologies(limit);
    } catch (erro: any) {
      return CommonError.build(
        erro.message,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }

  async getTopCitiesForMostSearchedTech() {
    try {
      return this.techSearchRepository.getTopCitiesForMostSearchedTech();
    } catch (erro: any) {
      return CommonError.build(
        erro.message,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }
  async searchTechAndCity(technology: string, city: string) {
    const count = await this.techSearchRepository.getSearchCount(technology, city);

    if (count !== null) {
      await this.techSearchRepository.incrementSearchCount(technology, city);
      return count + 1;
    } else {
      await this.techSearchRepository.createSearchCount(technology, city);
      return 1;
    }
  }

}

export { TechSearchService };



// import { CommonError } from '../../utils/CommonError';
// import { STATUS_CODE } from '../../utils/statusCode';
// import TechSearchRepository from './TechSearchRepository';

// class TechSearchService {
//   getTopTechnologies(limit: number) {
//     throw new Error("Method not implemented.");
//   }
//   registerTechSearch(technology: any, city: any) {
//     throw new Error("Method not implemented.");
//   }
//   constructor(private techSearchRepository: TechSearchRepository) {}

//   async findTopSearchedTechnologies(limit: number = 5) {
//     try {
//       return await this.techSearchRepository.findTopSearchedTechnologies(limit);
//     } catch (erro: any) {
//     return CommonError.build(erro.message,STATUS_CODE.INTERNAL_SERVER_ERROR)
//       }
//     }
  

//   async findTopSearchedCities(technology: string, limit: number = 5) {
//     try {
//       return await this.techSearchRepository.findTopSearchedCities(technology, limit);
//     } catch (erro: any) {
//         return CommonError.build(erro.message,STATUS_CODE.INTERNAL_SERVER_ERROR)
//           }
//     }
// }


// export default TechSearchService;
