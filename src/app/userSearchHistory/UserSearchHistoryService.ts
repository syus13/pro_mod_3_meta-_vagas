import { UserSearchHistory } from './UserSearchHistory';

class UserSearchHistoryService {
  async addSearchHistory(userId: string, searchQuery: string) {
    const history = new UserSearchHistory({
      userId,
      searchQuery,
    });

    await history.save();
    return history;
  }

  async getLastSearches(userId: string, limit: number = 10) {
    return UserSearchHistory.find({ userId })
      .sort({ timestamp: -1 })
      .limit(limit);
  }
}

export { UserSearchHistoryService };
