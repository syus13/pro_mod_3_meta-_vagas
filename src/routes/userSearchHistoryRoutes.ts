import { Router } from "express";
import { UserSearchHistoryModule } from "../app/userSearchHistory/UserSearchHistoryModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const userSearchHistoryRoutes = Router();

const { controller } = UserSearchHistoryModule.getInstance();

userSearchHistoryRoutes.use(AuthMiddleware.handler);

userSearchHistoryRoutes.get(
  "/:userId/history",
  controller.getUserSearchHistory.bind(controller)
);

export { userSearchHistoryRoutes };
