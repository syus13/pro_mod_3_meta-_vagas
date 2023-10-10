import JWT from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { STATUS_CODE } from "../../utils/statusCode.js";
import { CommonError } from "../../utils/CommonError.js";

class AuthMiddleware {
  static handler(req: Request, res: Response, next: NextFunction) {
    const { headers } = req;

    if (!headers.authorization) {
      return res
        .status(STATUS_CODE.NON_AUTHORIZED)
        .json(
          CommonError.build("Unauthorized user", STATUS_CODE.NON_AUTHORIZED)
        );
    }
    const [, token] = headers.authorization.split(" ");

    try {
      const secretKey = process.env.JWT_SECRET_KEY;
      JWT.verify(token, secretKey as string);
    } catch (erro) {
      return res.status(STATUS_CODE.NON_AUTHORIZED).json(CommonError.build(erro.message, STATUS_CODE.NON_AUTHORIZED));
    }

    next();
  }
}

export { AuthMiddleware };
