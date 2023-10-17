import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";
import { jobRoutes } from "./jobRoutes";
import { techSearchRoutes } from "./techSearchRoutes";
import { userSearchHistoryRoutes } from "./userSearchHistoryRoutes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/login", authRoutes)
routes.use("/jobs", jobRoutes)
routes.use("/techSearch", techSearchRoutes)
routes.use("/userSearchHistory", userSearchHistoryRoutes)

export {routes}