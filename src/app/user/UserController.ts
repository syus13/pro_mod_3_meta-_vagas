import { Request, Response } from "express";
import { UserValidation } from "../../utils/Validations/user/UserValidation";
import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { UserService } from "./UserService";
import { UpdateValidation } from "../../utils/Validations/user/UpdateValidation";

class UserController {
  constructor(private service: UserService) {}

  async create(req: Request, res: Response) {
    const { body } = req;

    const bodyIsValid = await UserValidation.isValid(body);
    if (bodyIsValid && bodyIsValid.error) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build(bodyIsValid.message, STATUS_CODE.BAD_REQUEST));
    }
    const user = await this.service.create(body);
    if ("error" in user) {
      return res.status(STATUS_CODE.CONFLICT).json(user);
    }

    return res.status(STATUS_CODE.CREATED).json(user);
  }

  async update(req: Request, res: Response) {
    const {
      body,
      params: { id },
    } = req;

    const updateValidation = await UpdateValidation.isValid(body);
    if (updateValidation && updateValidation.error) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(
          CommonError.build(updateValidation.message, STATUS_CODE.BAD_REQUEST)
        );
    }

    const result = await this.service.update(id, body);
    if ("error" in result) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build(result.message, STATUS_CODE.BAD_REQUEST));
    }

    return res.status(STATUS_CODE.OK).json(result);
  }

  async getFavoriteJobs(req: Request, res: Response) {
    const { userId } = req.params;
    const resultOrError = this.service.getFavoriteJobs(userId);

    if ("error" in resultOrError) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(CommonError.build("Bad request", STATUS_CODE.BAD_REQUEST));
    }
    return res.status(STATUS_CODE.OK).json(resultOrError);
  }

  async getUserSearchHistory(req: Request, res: Response) {
    const { userId } = req.params;
    const resultOrError = await this.service.getUserSearchHistory(userId);

    if ("error" in resultOrError) {
      return res.status(resultOrError.statusCode).json(resultOrError);
    }

    return res.json(resultOrError);
  }
}

export { UserController };
