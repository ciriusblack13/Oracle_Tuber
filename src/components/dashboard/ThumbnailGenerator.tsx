import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Image, History } from "lucide-react";

interface ThumbnailGeneratorProps {
  onGenerate?: (prompt: string) => void;
}

export default function ThumbnailGenerator({
  onGenerate = () => {},
}: ThumbnailGeneratorProps) {
  return (
    <div className="grid grid-cols-[1fr_400px] gap-6 h-[600px]">
      {/* Main Area */}
      <Card className="p-6 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-lg bg-muted/10">
          <div className="text-center">
            <Image className="h-10 w-10 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">Drag and drop an image here</p>
            <p className="text-sm text-muted-foreground">
              or click to select a file
            </p>
          </div>
        </div>
      </Card>

      {/* Controls */}
      <Card className="p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Edit Controls</h2>
          <Button variant="outline" className="gap-2">
            <History className="h-4 w-4" />
            History
          </Button>
        </div>

        <div className="space-y-4">
          <Input placeholder="Enter prompt for generation, editing, or inpainting..." />
          <Button className="w-full">Generate</Button>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Search YouTube videos</h3>
          </div>
          <Input placeholder="Search YouTube videos..." />
          <Button variant="secondary" className="w-full">
            Find Thumbnails
          </Button>
        </div>
      </Card>
    </div>
  );
}
