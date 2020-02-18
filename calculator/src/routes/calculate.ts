import { Router } from "express";
import { calculateSimilarity } from './../controllers/calculateController';

const router = Router();

router.route("/").post(calculateSimilarity);

export default router;