import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { authRoutes } from "./authRoutes";

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/login", authRoutes)

export {routes}