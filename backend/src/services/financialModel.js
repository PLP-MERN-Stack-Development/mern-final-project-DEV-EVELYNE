// src/services/financialModel.js
import { formatCurrency } from "../utils/helpers.js";

export const generateFinancialProjection = (baseRevenue = 10000, growthRate = 0.2, years = 3, currency = "USD") => {
  const data = [];

  let revenue = baseRevenue;
  for (let year = 1; year <= years; year++) {
    const expenses = revenue * 0.6; // assume 60% expenses
    const profit = revenue - expenses;

    data.push({
      year,
      revenue: formatCurrency(revenue, currency),
      expenses: formatCurrency(expenses, currency),
      profit: formatCurrency(profit, currency),
    });

    revenue = revenue + revenue * growthRate;
  }

  return data;
};
