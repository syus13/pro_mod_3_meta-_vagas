// UserSearchHistoryController.ts
import { Request, Response } from 'express';
import { UserSearchHistoryService } from './UserSearchHistoryService';
import { STATUS_CODE } from '../../utils/statusCode';
import { CommonError } from '../../utils/CommonError';

class UserSearchHistoryController {
  constructor(private userSearchHistoryService: UserSearchHistoryService) {}

  async addSearchHistory(req: Request, res: Response) {
    const { userId, searchQuery } = req.body;

    try {
      const history = await this.userSearchHistoryService.addSearchHistory(
        userId,
        searchQuery
      );

      return res.status(STATUS_CODE.OK).json(history);
    } catch (erro: any) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
    }
  }

  async getLastSearches(req: Request, res: Response) {
    const userId = req.params.userId;

    try {
      const searches = await this.userSearchHistoryService.getLastSearches(
        userId
      );

      return res.status(STATUS_CODE.OK).json(history);
    } catch (erro: any) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .json(CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR))
    }
  }
}

export { UserSearchHistoryController };
