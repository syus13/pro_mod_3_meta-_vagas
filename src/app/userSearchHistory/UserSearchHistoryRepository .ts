import { Model } from "mongoose";
import { TypeUserSearchHistory } from "./UserSearchHistory";

class UserSearchHistoryRepository {
  constructor(private model: Model<TypeUserSearchHistory>) {}

  async getUserSearchHistory(userId: string) {
    try {
      return await this.model.find({ userId }).sort({ timestamp: -1 });
    } catch (erro: any) {
      throw new Error(`Failed to get user search history: ${erro.message}`);
    }
  }
}

export { UserSearchHistoryRepository };
