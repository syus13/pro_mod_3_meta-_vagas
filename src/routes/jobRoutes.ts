import { Router } from "express";
import { JobModule } from "../app/job/JobModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const jobRoutes = Router();
const { controller } = JobModule.getInstance();
jobRoutes.use(AuthMiddleware.handler);
jobRoutes.post("/", controller.createJob.bind(controller));
jobRoutes.get("/search", controller.searchJobs.bind(controller));
jobRoutes.put(
  "/:userId/favorite/:jobId",
  controller.favoriteJob.bind(controller)
);
jobRoutes.get("/:pagination", controller.favoriteJob.bind(controller));

export { jobRoutes };
