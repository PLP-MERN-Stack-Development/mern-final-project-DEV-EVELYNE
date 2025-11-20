import express from "express";
import cors from "cors";
import morgan from "morgan";
import planRoutes from "./routes/planRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/users", userRoutes);
app.use("/api/plans", planRoutes);

app.get("/", (req, res) => {
  res.send("✅ AI Business Plan Generator Backend Running...");
});

export default app;
