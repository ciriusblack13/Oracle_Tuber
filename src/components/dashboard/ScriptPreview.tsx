import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy, Save, RefreshCw } from "lucide-react";

interface ScriptPreviewProps {
  content?: string;
  onRegenerate?: () => void;
  onSave?: () => void;
  onCopy?: () => void;
}

const ScriptPreview = ({
  content = `# Sample YouTube Script

Intro:
Hey everyone! Welcome back to the channel. Today we're going to be talking about something really exciting...

Main Points:
1. First, we'll cover the basics
2. Then, we'll dive into advanced techniques
3. Finally, we'll look at some real-world examples

Outro:
That's all for today! Don't forget to like and subscribe for more content like this.`,
  onRegenerate = () => console.log("Regenerate clicked"),
  onSave = () => console.log("Save clicked"),
  onCopy = () => console.log("Copy clicked"),
}: ScriptPreviewProps) => {
  return (
    <Card className="w-full h-full bg-background border-border p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Generated Script</h2>
        <div className="flex gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={onRegenerate}>
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Regenerate script</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={onCopy}>
                  <Copy className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy to clipboard</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" size="icon" onClick={onSave}>
                  <Save className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Save script</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <ScrollArea className="flex-1 border rounded-md p-4">
        <pre className="whitespace-pre-wrap font-mono text-sm">{content}</pre>
      </ScrollArea>
    </Card>
  );
};

export default ScriptPreview;
