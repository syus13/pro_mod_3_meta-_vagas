import { Router } from "express";
import { JobModule } from "../app/job/JobModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const jobRoutes = Router();
const { controller } = JobModule.getInstance();

jobRoutes.post("/", controller.createJob.bind(controller));
jobRoutes.post("/filter", controller.filterJobs.bind(controller));
jobRoutes.post('/favorite/:id', controller.favoriteJob.bind(controller));

export { jobRoutes };
