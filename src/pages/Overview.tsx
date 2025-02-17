import React from "react";
import QuickMetricsPanel from "@/components/dashboard/QuickMetricsPanel";
import ContentSuggestions from "@/components/dashboard/ContentSuggestions";

const Overview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <QuickMetricsPanel />
      <ContentSuggestions />
    </div>
  );
};

export default Overview;
