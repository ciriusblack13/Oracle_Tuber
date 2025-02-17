import React from "react";
import CompetitorAnalysis from "@/components/dashboard/CompetitorAnalysis";

const Competitors = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Competitor Analysis</h1>
      <CompetitorAnalysis
        onCompetitorSelect={(id) => {
          console.log("Selected competitor:", id);
        }}
      />
    </div>
  );
};

export default Competitors;
