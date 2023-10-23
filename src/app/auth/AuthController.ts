// import { Request, Response } from "express";
// import { AuthValidation } from "../../utils/Validations/auth/AuthValidation";
// import { STATUS_CODE } from "../../utils/statusCode";
// import { CommonError } from "../../utils/CommonError";
// import { AuthService } from "./AuhtService";

import { Request, Response } from "express";
import { AuthValidation } from "../../utils/Validations/auth/AuthValidation";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";
import { AuthService } from "./AuhtService";

class AuthController {
  constructor(private service: AuthService) {}

  async login(req: Request, res: Response) {
    const { body } = req;

    const authController = await AuthValidation.isValid(body);
    if (authController.erro) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json(
          CommonError.build(authController.message, STATUS_CODE.BAD_REQUEST)
        );
    }

    const result = await this.service.login(body);
    if ("error" in result) {
      return res
        .status(STATUS_CODE.NON_AUTHORIZED)
        .json(CommonError.build(result.message, STATUS_CODE.NON_AUTHORIZED));
    }

    return res.status(STATUS_CODE.OK).json(result);
  }
}

export { AuthController };
