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
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(
          CommonError.build(job.message, STATUS_CODE.INTERNAL_SERVER_ERROR)
        );
    }
    return res.status(STATUS_CODE.CREATED).json(job);
  }

async filterJobs(req: Request, res: Response) {
  const filters = req.body;
  const { page, perPage } = req.query; 

  try {
    
    const pageNumber = parseInt(page as string, 10) || 1;
    const itemsPerPage = parseInt(perPage as string, 10) || 10;

   
    const startIndex = (pageNumber - 1) * itemsPerPage;

    const jobs = await this.service.filterJobs(filters, startIndex, itemsPerPage);

    if ("error" in jobs) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(CommonError.build(jobs.message, STATUS_CODE.INTERNAL_SERVER_ERROR));
    }

    return res.status(STATUS_CODE.OK).json(jobs);
  } catch (error: any) {
    return res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json(
        CommonError.build(
          "Server error",
          STATUS_CODE.INTERNAL_SERVER_ERROR
        )
      );
  }
}
}
export{JobController}