import { Router } from 'express';
import { UserSearchHistoryModule } from '../app/userSearchHistory/UserSearchHistoryModule';

const userSearchHistoryRoutes = Router();


const { controller } = UserSearchHistoryModule.getInstance();


userSearchHistoryRoutes.post('/add', controller.addSearchHistory);
userSearchHistoryRoutes.get('/lastSearches/:userId', controller.getLastSearches);

export { userSearchHistoryRoutes };
