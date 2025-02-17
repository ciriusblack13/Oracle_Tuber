import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FileText, Video, PenSquare, FileVideo } from "lucide-react";
import AIScriptWriter from "@/components/dashboard/AIScriptWriter";
import VideoGenerator from "@/components/dashboard/VideoGenerator";
import VideoEditor from "@/components/dashboard/VideoEditor";

const tools = [
  {
    id: "script-generator",
    icon: FileText,
    title: "Script Generator",
    description:
      "Genera script creativi e coinvolgenti basati sui contenuti dei competitor",
    component: AIScriptWriter,
  },
  {
    id: "video-generator",
    icon: Video,
    title: "Video Generator",
    description: "Registra i tuoi video con teleprompter integrato",
  },
  {
    id: "video-editor",
    icon: FileVideo,
    title: "Video Editor",
    description: "Modifica i tuoi video tramite lo script del video",
  },
  {
    id: "general-copy",
    icon: PenSquare,
    title: "General Copy",
    description:
      "Genera testi versatili adattabili a vari formati di contenuto",
  },
];

const Lab = () => {
  const [selectedTool, setSelectedTool] = React.useState<string | null>(null);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Lab</h1>
      <p className="text-muted-foreground">Scegli uno strumento per iniziare</p>

      {!selectedTool ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tools.map((tool) => (
            <Card
              key={tool.id}
              className="p-6 cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedTool(tool.id)}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <tool.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold">{tool.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedTool(null)}
            className="mb-4"
          >
            ← Back to tools
          </Button>

          {selectedTool === "script-generator" && (
            <AIScriptWriter
              onScriptGenerate={(settings) => {
                console.log("Generate script with settings:", settings);
              }}
              onScriptSave={(content) => {
                console.log("Save script:", content);
              }}
            />
          )}
          {selectedTool === "video-generator" && (
            <VideoGenerator
              onRecordingComplete={(blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = "recorded-video.webm";
                a.click();
              }}
            />
          )}
          {selectedTool === "video-editor" && <VideoEditor />}
        </div>
      )}
    </div>
  );
};

export default Lab;
