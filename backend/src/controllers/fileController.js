// src/controllers/fileController.js
import BusinessPlan from "../models/BusinessPlan.js";
import { exportPlanToPDF, exportPlanToDocx } from "../services/exportService.js";

export const exportPlan = async (req, res) => {
  try {
    const { id, format } = req.params;
    const plan = await BusinessPlan.findById(id);
    if (!plan) return res.status(404).json({ message: "Plan not found" });

    const outputPath = `./exports/${plan.idea.replace(/\s+/g, "_")}.${format}`;
    let filePath;

    if (format === "pdf") {
      filePath = await exportPlanToPDF(plan, outputPath);
    } else if (format === "docx") {
      filePath = await exportPlanToDocx(plan, outputPath);
    } else {
      return res.status(400).json({ message: "Invalid format. Use pdf or docx." });
    }

    res.download(filePath, (err) => {
      if (err) res.status(500).json({ message: "File download failed" });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
