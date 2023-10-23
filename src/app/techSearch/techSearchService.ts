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

  async getTopTechnologies() {
    try {
      return await this.techSearchRepository.getTopTechnologies();
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { TechSearchService };
