// src/server.js
import dotenv from "dotenv";
dotenv.config(); // ✅ must be first — before importing other files!

import { connectDB } from "./config/db.js";
import app from "./app.js";

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
