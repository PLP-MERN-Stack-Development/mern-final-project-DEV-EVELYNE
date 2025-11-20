import React, { createContext, useContext, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);

  const addPlan = (plan) => setPlans((prev) => [...prev, plan]);
  const clearPlans = () => setPlans([]);

  return (
    <PlanContext.Provider value={{ plans, addPlan, clearPlans }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlans = () => useContext(PlanContext);
