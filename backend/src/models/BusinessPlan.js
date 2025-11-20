import mongoose from "mongoose";

const businessPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  idea: String,
  sector: String,
  country: String,
  content: String,
}, { timestamps: true });

export default mongoose.model("BusinessPlan", businessPlanSchema);
