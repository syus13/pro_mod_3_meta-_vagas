import { UserSearchHistory } from "./UserSearchHistory";
import { UserSearchHistoryController } from "./UserSearchHistoryController";
import { UserSearchHistoryRepository } from "./UserSearchHistoryRepository ";
import { UserSearchHistoryService } from "./UserSearchHistoryService";

class UserSearchHistoryModule {
  static getInstance() {
    const repository = new UserSearchHistoryRepository(UserSearchHistory);
    const service = new UserSearchHistoryService(repository);
    const controller = new UserSearchHistoryController(service);

    return { repository, service, controller };
  }
}

export { UserSearchHistoryModule };
