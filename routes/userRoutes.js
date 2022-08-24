import { Router } from "express";
import { SignIn } from "../controller/authController.js";

const routes = Router();

routes.post("/", SignIn);


export default routes;