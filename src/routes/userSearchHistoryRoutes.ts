import { Router } from "express";
import { UserSearchHistoryModule } from "../app/userSearchHistory/UserSearchHistoryModule";

const userSearchHistoryRoutes = Router();

const { controller } = UserSearchHistoryModule.getInstance();

userSearchHistoryRoutes.get(
  "/:userId/history",
  controller.getUserSearchHistory.bind(controller)
);

export { userSearchHistoryRoutes };
