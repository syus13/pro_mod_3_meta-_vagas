import { Request, Response } from "express";
import { JobValidation } from "../../../utils/Validations/job/JobValidation";
import { STATUS_CODE } from "../../../utils/statusCode";
import { CommonError } from "../../../utils/CommonError";


class JobController{
    constructor(private service: any){}
    async create(req: Request, res: Response){
        const{body} = req

        const bodyIsValid = await JobValidation.isValid(body)
    if(bodyIsValid && bodyIsValid.error) {
      return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST))
    }
    const job = await this.service.create(body)
    if('error' in job){
        return res.status(STATUS_CODE.BAD_REQUEST).json(CommonError.build(job.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
    }
    return res.status(STATUS_CODE.CREATED).json(job)
    }

    async filterJobs(req: Request, res: Response){
        const { body, query } = req
        const filter = await this.service.filterJobs(query)
        return res.status(STATUS_CODE.OK).json(filter)
}

    }

    export {JobController}