// src/routes/fileRoutes.js
import express from "express";
import { exportPlan } from "../controllers/fileController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Example: /api/files/export/:id/:format
router.get("/export/:id/:format", protect, exportPlan);

export default router;
