import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeJob } from "./Job";
import { filterMapping } from "./filterMapping";

class JobService {
  constructor(
    private repository: any,
    private techSearchRepository: any,
    private userRepository: any
  ) {}

  async create(data: TypeJob) {
    try {
      return await this.repository.create(data);
    } catch (erro: any) {
      return CommonError.build(
        "Error registering the job",
        STATUS_CODE.BAD_REQUEST
      );
    }
  }

  async filterJobs(filters: any, startIndex: number, itemsPerPage: number) {
    try {
      const jobAlreadyExists = await this.repository.filterJobs(
        filters,
        startIndex,
        itemsPerPage
      );

      if (jobAlreadyExists.length === 0) {
        return CommonError.build("Job not found", STATUS_CODE.NOT_FOUND);
      }

      if (filters.technology) {
        await this.techSearchRepository.upsertTechCount(filters);
      }

      const filteredJobs = await this.buildQuery(
        filters,
        startIndex,
        itemsPerPage
      );

      await this.userRepository.searchRecord(filters, jobAlreadyExists);
      return filteredJobs;
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  private async buildQuery(
    filters: any,
    startIndex: number,
    itemsPerPage: number
  ) {
    try {
      const query = this.repository.model.find();

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
      return jobs;
    } catch (erro: any) {
      CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async favoriteJob(userId: string, jobId: string) {
    try {
      return await this.repository.favoriteJob(userId, jobId);
    } catch (error: any) {
      return CommonError.build(
        error.message,
        STATUS_CODE.INTERNAL_SERVER_ERROR
      );
    }
  }
}

export { JobService };
