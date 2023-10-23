import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeJob } from "./Job";
import { JobRepository } from "./JobRepository";
import { filterMapping } from "./filterMapping";

class JobService {
  constructor(
    private repository: JobRepository,
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

  async searchJobs(filters: any, page: number, limit: number) {
    try {
      return await this.repository.searchJobs(filters, page, limit);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }

  async favoriteJob(userId: string, jobId: string) {
    try {
      return await this.repository.favoriteJob(userId, jobId);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}
export { JobService };
