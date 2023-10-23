// UserSearchHistoryController.ts
import { Request, Response } from "express";
import { UserSearchHistoryService } from "./UserSearchHistoryService";
import { STATUS_CODE } from "../../utils/statusCode";
import { CommonError } from "../../utils/CommonError";

class UserSearchHistoryController {
  constructor(private userSearchHistoryService: UserSearchHistoryService) {}

  async getUserSearchHistory(req: Request, res: Response) {
    const { userId } = req.params;
    const resultOrError =
      await this.userSearchHistoryService.getUserSearchHistory(userId);

    if ("error" in resultOrError) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(
          CommonError.build(
            resultOrError.message,
            STATUS_CODE.INTERNAL_SERVER_ERROR
          )
        );
    }

    return res.json(resultOrError);
  }
}

export { UserSearchHistoryController };
