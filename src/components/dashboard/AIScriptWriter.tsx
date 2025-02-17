import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import TemplateSelector from "./TemplateSelector";
import ScriptPreview from "./ScriptPreview";

interface AIScriptWriterProps {
  onScriptGenerate?: (settings: {
    template: string;
    tone: number;
    length: number;
  }) => void;
  onScriptSave?: (content: string) => void;
  generatedContent?: string;
}

const AIScriptWriter = ({
  onScriptGenerate = () => {},
  onScriptSave = () => {},
  generatedContent = "",
}: AIScriptWriterProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState("tutorial");
  const [tone, setTone] = useState(50);
  const [length, setLength] = useState(5);

  const handleGenerateScript = () => {
    onScriptGenerate({
      template: selectedTemplate,
      tone,
      length,
    });
  };

  return (
    <Card className="w-full h-[600px] bg-background flex">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        tone={tone}
        length={length}
        onTemplateSelect={setSelectedTemplate}
        onToneChange={setTone}
        onLengthChange={setLength}
        onGenerate={handleGenerateScript}
      />
      <div className="flex-1">
        <ScriptPreview
          content={generatedContent}
          onSave={() => onScriptSave(generatedContent)}
          onCopy={() => navigator.clipboard.writeText(generatedContent)}
          onRegenerate={handleGenerateScript}
        />
      </div>
    </Card>
  );
};

export default AIScriptWriter;
