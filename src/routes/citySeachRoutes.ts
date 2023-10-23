import { Router } from "express";
import { CitySearchModule } from "../app/citySearch/CitySearchModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const citySearchRoutes = Router();

const { controller } = CitySearchModule.getInstance();

citySearchRoutes.use(AuthMiddleware.handler);
citySearchRoutes.get("/top5", controller.getTop5Cities.bind(controller));
citySearchRoutes.get(
  "/top5cityAndTechnonogy",
  controller.getTop5CitiesForMostSearchedTech.bind(controller)
);

export { citySearchRoutes };
