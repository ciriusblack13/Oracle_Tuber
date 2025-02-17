import React from "react";
import AIScriptWriter from "@/components/dashboard/AIScriptWriter";

const ScriptWriter = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">AI Script Writer</h1>
      <AIScriptWriter
        onScriptGenerate={(settings) => {
          console.log("Generate script with settings:", settings);
        }}
        onScriptSave={(content) => {
          console.log("Save script:", content);
        }}
      />
    </div>
  );
};

export default ScriptWriter;
