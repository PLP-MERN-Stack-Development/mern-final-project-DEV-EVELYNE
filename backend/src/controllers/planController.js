import {
  generateBusinessPlan,
  validateIdea,
  analyzeCompetitors,
  generateFinancials,
} from "../services/planGenerator.js";

export const createPlan = async (req, res, next) => {
  try {
    const { idea, sector, country } = req.body;
    const plan = await generateBusinessPlan(idea, sector, country);
    res.json({ plan });
  } catch (error) {
    next(error);
  }
};

export const validateBusinessIdea = async (req, res, next) => {
  try {
    const { idea, sector, country } = req.body;
    const result = await validateIdea(idea, sector, country);
    res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const competitorAnalysis = async (req, res, next) => {
  try {
    const { sector, country } = req.body;
    const result = await analyzeCompetitors(sector, country);
    res.json({ result });
  } catch (error) {
    next(error);
  }
};

export const financialForecast = async (req, res, next) => {
  try {
    const { idea, sector, country } = req.body;
    const result = await generateFinancials(idea, sector, country);
    res.json({ result });
  } catch (error) {
    next(error);
  }
};
