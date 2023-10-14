import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeJob } from "./Job";

class JobService{
    constructor (
        private repository: any,
        private techSearchRepository: any,
        private userRepository: any
        ){}

        // 
        
        async createJob(data: TypeJob) {
          try {
              return await this.repository.create(data);              
          } catch (error: any) {
              return CommonError.build("Error registering the job", STATUS_CODE.BAD_REQUEST);
          }
      }

        async filterJobs(userId: string, data: any) {
            try {
              const jobAlreadyExists = await this.repository.filterJobs(data);
          
              if (jobAlreadyExists.length === 0) {
                return CommonError.build("Job not found", STATUS_CODE.NOT_FOUND);
              }
          
              if (data.technology) {
                const techCountAlready = await this.techSearchRepository.findByTech(data);
          
                if (techCountAlready.length === 0) {
                  await this.techSearchRepository.createTechCount(data);
                } else {
                  await this.techSearchRepository.incrementTechCount(data);
                }
              }
          
              await this.userRepository.searchHistoryRecord(userId, jobAlreadyExists);
              return jobAlreadyExists;
            } catch (erro: any) {
              return CommonError.build("Não foi possível realizar a pesquisa, tente novamente mais tarde", STATUS_CODE.INTERNAL_SERVER_ERROR);
            }
          }
          
}

export {JobService}