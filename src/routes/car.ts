import { Router } from "express";
import { getCar, getCars } from "../controllers/car";

const carRouter = Router();

carRouter.get("/:id", getCar);
carRouter.get("/", getCars);

export default carRouter;
