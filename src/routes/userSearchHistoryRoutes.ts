import { Router } from 'express';
import { UserSearchHistoryModule } from '../app/userHistory/UserSearchHistoryModule';
const userSearchHistoryRoutes = Router();

const userSearchHistoryroutes = Router
const { controller } = UserSearchHistoryModule.getInstance();


userSearchHistoryRoutes.post('/add', controller.addSearchHistory);
userSearchHistoryRoutes.get('/lastSearches/:userId', controller.getLastSearches);

export { userSearchHistoryRoutes };
