// UserSearchHistoryModule.ts
import { Router } from 'express';
import { UserSearchHistoryController } from './UserSearchHistoryController';
import { UserSearchHistoryService } from './UserSearchHistoryService';

class UserSearchHistoryModule {
  static getInstance() {
    const service = new UserSearchHistoryService();
    const controller = new UserSearchHistoryController(service)
        
    return { service, controller };
  }
}

export { UserSearchHistoryModule };
