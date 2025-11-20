// src/config/openai.js
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

if (!process.env.GROQ_API_KEY) {
  console.error("❌ Missing GROQ_API_KEY in .env file");
  process.exit(1);
}

// 🆕 Optional: Default model fallback if not set in .env
if (!process.env.GROQ_MODEL) {
  process.env.GROQ_MODEL = "llama-3.1-70b-versatile";
  console.log("⚙️ Using default model: llama-3.1-70b-versatile");
}

// ✅ Keep variable name `openai` so the rest of your code stays compatible
const openai = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export default openai;
