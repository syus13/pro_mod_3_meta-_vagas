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
  "/topTechnologies",
  techSearchController.getTopTechnologies.bind(techSearchController)
);
techSearchRoutes.get(
  "/topCitiesForMostSearchedTech",
  techSearchController.getTopCitiesForMostSearchedTech.bind(
    techSearchController
  )
);
techSearchRoutes.get("/search", techSearchController.searchTechAndCity.bind(
    techSearchController
  ));
techSearchRoutes.get(
  "/searchTech",
  techSearchController.getTechSearchResults.bind(techSearchController)
);

//techSearchRoutes.get('/top5', techSearchController.getTop5Technologies.bind(techSearchController));


export { techSearchRoutes };
