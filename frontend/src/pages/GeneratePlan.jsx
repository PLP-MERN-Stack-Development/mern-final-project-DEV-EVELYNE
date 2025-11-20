import React, { useState } from "react";
import { generatePlan, validateIdea, analyzeCompetitors, generateFinancials } from "../services/planService";

const GeneratePlan = () => {
  const [idea, setIdea] = useState("");
  const [sector, setSector] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("plan");

  const handleAction = async () => {
    setLoading(true);
    let res;
    if (activeTab === "plan") res = await generatePlan(idea, sector, country);
    if (activeTab === "validate") res = await validateIdea(idea, sector, country);
    if (activeTab === "competitors") res = await analyzeCompetitors(sector, country);
    if (activeTab === "financials") res = await generateFinancials(idea, sector, country);
    setResult(res);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">AI Business Assistant</h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        {["plan", "validate", "competitors", "financials"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${
              activeTab === tab ? "border-b-2 border-blue-600 text-blue-700 font-semibold" : "text-gray-500"
            }`}
          >
            {tab === "plan" && "Business Plan"}
            {tab === "validate" && "Idea Validation"}
            {tab === "competitors" && "Competitor Analysis"}
            {tab === "financials" && "Financial Forecast"}
          </button>
        ))}
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Business Idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full border p-3 rounded"
        />
        <button
          onClick={handleAction}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Run Analysis"}
        </button>
      </div>

      {result && (
        <div className="mt-6 bg-white p-6 rounded shadow-sm">
          <h3 className="font-bold text-lg mb-2">Result:</h3>
          <pre className="whitespace-pre-wrap text-gray-700">{result}</pre>
        </div>
      )}
    </div>
  );
};

export default GeneratePlan;
