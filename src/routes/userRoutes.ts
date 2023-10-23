import { Router } from "express";
import { UserModule } from "../app/user/UserModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const userRoutes = Router();
const { controller } = UserModule.getInstance();

userRoutes.post("/", controller.create.bind(controller));
userRoutes.use(AuthMiddleware.handler);
userRoutes.put("/:id", controller.update.bind(controller));
userRoutes.get(
  "/:userId/favorites",
  controller.getFavoriteJobs.bind(controller)
);
userRoutes.get(
  "/:userId/favorites",
  controller.getFavoriteJobs.bind(controller)
);
userRoutes.get(
  "/:userId/history",
  controller.getUserSearchHistory.bind(controller)
);

export { userRoutes };
