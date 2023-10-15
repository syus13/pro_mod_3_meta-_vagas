// JobRepository.ts

import { Model } from "mongoose";
import { TypeJob } from "./Job";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { filterMapping } from "./filterMapping";

class JobRepository {
  constructor(
    private model: Model<TypeJob>,
    private techSearchRepository: any
  ) {}

  async create(data: TypeJob) {
    try {
      return this.model.create(data);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST);
    }
  }

  async filterJobs(filters: any, startIndex: number, itemsPerPage: number) {
    try {
      const query = this.model.find();

      if (filters) {
        Object.keys(filterMapping).forEach((filterField) => {
          if (filters[filterField]) {
            query
              .where(filterMapping[filterField])
              .equals(filters[filterField]);
          }
        });

        query.skip(startIndex).limit(itemsPerPage);
      }

      const jobs = await query.exec();

      if (jobs.length === 0) {
        return CommonError.build("Job not Found", STATUS_CODE.NOT_FOUND);
      }

    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async upsertTechCount(filters: any) {
    try {
      const existingTech = await this.techSearchRepository.findOne({
        technology: filters.technology,
      });

      if (existingTech) {
        existingTech.count += 1;
        await existingTech.save();
      } else {
        await this.techSearchRepository.create({
          technology: filters.technology,
          count: 0,
        });
      }
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { JobRepository };
