// 

// JobRepository.ts

import { Model, Types } from "mongoose";
import { TypeJob } from "./Job";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { filterMapping } from "./filterMapping";

class JobRepository {
  constructor(private model: Model<TypeJob>, private techSearchRepository: any) {}

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
            query.where(filterMapping[filterField]).equals(filters[filterField]);
          }
        });

        query.skip(startIndex).limit(itemsPerPage);
      }

      const jobs = await query.exec();

      if (jobs.length === 0) {
        return CommonError.build("Job not Found", STATUS_CODE.NOT_FOUND);
      }

      return jobs;
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
          count: 1,
        });
      }
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async favoriteJob(userId: string, jobId: string) {
    try {
      const job = await this.model.findById(jobId);

      if (!job) {
        return CommonError.build("Job not found", STATUS_CODE.NOT_FOUND);
      }

      const userIdObjectId = new Types.ObjectId(userId);

      if (job.favoritedBy.includes(userIdObjectId)) {
        return CommonError.build(
          "Job is already favorited by the user",
          STATUS_CODE.BAD_REQUEST
        );
      }

      job.favoritedBy.push(userIdObjectId);
      await job.save();

      return { message: "Job favorited successfully" };
    } catch (error: any) {
      return CommonError.build(
        error.message,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export { JobRepository };
