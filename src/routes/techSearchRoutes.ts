import { Router } from "express";
import { TechSearchModule } from "../app/techSearch/TechSearchModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const techSearchRoutes = Router();
const { techSearchController } = TechSearchModule.getInstance();

techSearchRoutes.use(AuthMiddleware.handler);
techSearchRoutes.post(
  "/register",
  techSearchController.registerTechSearch.bind(techSearchController)
);
techSearchRoutes.get(
  "/top5Technologies",
  techSearchController.getTopTechnologies.bind(techSearchController)
);

export { techSearchRoutes };
