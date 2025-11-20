import express from "express";
import {
  createPlan,
  validateBusinessIdea,
  competitorAnalysis,
  financialForecast,
} from "../controllers/planController.js";

const router = express.Router();

router.post("/generate", createPlan);
router.post("/validate", validateBusinessIdea);
router.post("/competitors", competitorAnalysis);
router.post("/financials", financialForecast);

export default router;
