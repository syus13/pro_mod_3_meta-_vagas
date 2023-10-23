import { CommonError } from "../../utils/CommonError";
import { STATUS_CODE } from "../../utils/statusCode";
import { UserSearchHistoryRepository } from "./UserSearchHistoryRepository ";

class UserSearchHistoryService {
  constructor(private repository: UserSearchHistoryRepository) {}

  async getUserSearchHistory(userId: string) {
    try {
      return await this.repository.getUserSearchHistory(userId);
    } catch (erro: any) {
      return CommonError.build(erro.message, STATUS_CODE.INTERNAL_SERVER_ERROR);
    }
  }
}

export { UserSearchHistoryService };
