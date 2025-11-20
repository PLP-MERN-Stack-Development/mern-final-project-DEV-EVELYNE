import openai from "../config/openai.js";

// 🆕 Add this constant ONCE at the top — choose a currently supported Groq model:
const ACTIVE_MODEL = process.env.GROQ_MODEL || "llama-3.1-70b-versatile";

// ✅ Existing function stays unchanged (except using ACTIVE_MODEL)
export const generateBusinessPlan = async (idea, sector, country) => {
  const prompt = `
  Generate a detailed business plan for ${idea} in the ${sector} sector in ${country}.
  Include: Executive Summary, Company Description, Market Analysis, Products, 
  Competitive Analysis, Marketing Strategy, Operations Plan, Management, Financial Plan, Implementation Timeline, Appendix.
  Format it clearly with headings.
  `;

  const response = await openai.chat.completions.create({
    model: ACTIVE_MODEL,
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0]?.message?.content || "⚠️ No plan generated.";
};

// 🧩 NEW: Idea Validation
export const validateIdea = async (idea, sector, country) => {
  const prompt = `
  Evaluate the feasibility of the business idea "${idea}" in the ${sector} sector in ${country}.
  Provide:
  1. Strengths of the idea
  2. Weaknesses or risks
  3. Market readiness
  4. Recommendations to improve the idea
  Format clearly with bullet points.
  `;

  const res = await openai.chat.completions.create({
    model: ACTIVE_MODEL,
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0]?.message?.content || "⚠️ No validation generated.";
};

// ⚔️ NEW: Competitor Analysis
export const analyzeCompetitors = async (sector, country) => {
  const prompt = `
  Conduct a competitor analysis for the ${sector} sector in ${country}.
  Provide:
  1. Top 5 competitors
  2. Their key offerings
  3. Market share or presence
  4. Gaps or opportunities for differentiation
  Format it clearly in sections.
  `;

  const res = await openai.chat.completions.create({
    model: ACTIVE_MODEL,
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0]?.message?.content || "⚠️ No analysis generated.";
};

// 💰 NEW: Financial Forecast
export const generateFinancials = async (idea, sector, country) => {
  const prompt = `
  Create a 3-year financial forecast for the business idea "${idea}" in the ${sector} sector in ${country}.
  Include:
  1. Startup Costs (itemized)
  2. Yearly Revenue Projections
  3. Operating Costs
  4. Break-even Analysis
  5. Profitability Overview
  Format with clear tables and headings.
  `;

  const res = await openai.chat.completions.create({
    model: ACTIVE_MODEL,
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0]?.message?.content || "⚠️ No forecast generated.";
};
