import { Router } from "express";
import { getStore, getStores } from "../controllers/store";

const storeRouter = Router();

storeRouter.get("/:id", getStore);
storeRouter.get("/", getStores);

export default storeRouter;
