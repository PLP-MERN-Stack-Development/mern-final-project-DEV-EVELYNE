import api from "./api";

export const generatePlan = async (idea, sector, country) => {
  const res = await api.post("/plans/generate", { idea, sector, country });
  return res.data.plan;
};

export const validateIdea = async (idea, sector, country) => {
  const res = await api.post("/plans/validate", { idea, sector, country });
  return res.data.result;
};

export const analyzeCompetitors = async (sector, country) => {
  const res = await api.post("/plans/competitors", { sector, country });
  return res.data.result;
};

export const generateFinancials = async (idea, sector, country) => {
  const res = await api.post("/plans/financials", { idea, sector, country });
  return res.data.result;
};
