import { Router } from "express";
import storeRouter from "./store";
import carRouter from "./car";

const router = Router();

router.use("/stores", storeRouter);
router.use("/cars", carRouter);

export default router;
