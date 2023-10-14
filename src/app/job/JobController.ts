import { Request, Response } from "express";
import { JobValidation } from "../../utils/Validations/job/JobValidation";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";

class JobController {
  constructor(private service: any) {}

  async createJob(req: Request, res: Response) {
    const { body } = req;

    const bodyIsValid = await JobValidation.isValid(body);
    if (bodyIsValid && bodyIsValid.error) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST));
    }
    const job = await this.service.create(body);
    if ("error" in job) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build(job.message, STATUS_CODE.BAD_REQUEST));
    }
    return res.status(STATUS_CODE.CREATED).json(job);
  }

  async filterJobs(req: Request, res: Response) {
    const { body, query } = req;
    const { userId } = body;
    const filter = await this.service.filterJobs(userId, query)
    if ("error" in filter) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build(filter.message, STATUS_CODE.BAD_REQUEST))
    }
    return res.status(STATUS_CODE.OK).json(filter)
  }

  async findAllJobs (req: Request, res: Response){
    const allJobs = await this.service.findAllJobs()
    if('error' in allJobs){
        return res
          .status(STATUS_CODE.BAD_REQUEST)
          .json(CommonError.build(allJobs.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
      }
      return res.status(STATUS_CODE.OK).json(allJobs)
    }

    async Pagination(req: Request, res: Response) {
        const { query } = req;
        const maxRecords = 5;    
        const pagination = await this.service.Pagination(query.itensPage, query.page, maxRecords);
        if('error' in pagination){
            return res
              .status(STATUS_CODE.BAD_REQUEST)
              .json(CommonError.build(pagination.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
          }
          return res.status(STATUS_CODE.OK).json(pagination)
        }

        
    

  }


export { JobController };
