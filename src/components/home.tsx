import React from "react";
import QuickMetricsPanel from "./dashboard/QuickMetricsPanel";
import AIScriptWriter from "./dashboard/AIScriptWriter";
import ContentSuggestions from "./dashboard/ContentSuggestions";
import CompetitorAnalysis from "./dashboard/CompetitorAnalysis";

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      <div className="max-w-[1512px] mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Content Creation Hub</h1>
          <p className="text-muted-foreground">
            Streamline your YouTube content creation process
          </p>
        </header>

        <div className="space-y-6">
          <QuickMetricsPanel />

          <AIScriptWriter
            onScriptGenerate={(settings) => {
              console.log("Generate script with settings:", settings);
            }}
            onScriptSave={(content) => {
              console.log("Save script:", content);
            }}
          />

          <ContentSuggestions />

          <CompetitorAnalysis
            onCompetitorSelect={(id) => {
              console.log("Selected competitor:", id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
