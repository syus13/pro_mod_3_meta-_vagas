import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { TypeJob } from "./Job";

class JobService{
    constructor(
        private repository: any,
        private techSearchRepository: any,
        private userRepository: any
        ){}

        async create(data: TypeJob ){
            try{
                return await this.repository.create(data)
            } catch(erro: any){
                return CommonError.build(erro.message, STATUS_CODE.BAD_REQUEST)
            }
        }

        async filterJobs(userId: string, data: any) {
            try {
              const jobAlreadyExists = await this.repository.filterJobs(data);
          
              if (jobAlreadyExists.length === 0) {
                return CommonError.build("Job not found", STATUS_CODE.NOT_FOUND);
              }
          
              if (data.technology) {
                const techCountAlreadyExists = await this.techSearchRepository.findByTech(data);
          
                if (techCountAlreadyExists.length === 0) {
                  await this.techSearchRepository.createTechCount(data);
                } else {
                  await this.techSearchRepository.incrementTechCount(data);
                }
              }
          
              await this.userRepository.searchHistoryRecord(userId, jobAlreadyExists);
              return jobAlreadyExists;
            } catch (erro: any) {
              return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
            }
          }
          
}

export {JobService}