import { Router } from "express";
import { JobModule } from "../app/job/JobModule";
import { AuthMiddleware } from "../app/middleware/AuthMiddleware";

const jobRoutes = Router();
const { controller } = JobModule.getInstance();

jobRoutes.post("/", AuthMiddleware.handler, controller.createJob.bind(controller));
jobRoutes.post("/filter", controller.filterJobs.bind(controller));

export { jobRoutes };
