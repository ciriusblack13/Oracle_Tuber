import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Layout, Image, Wand2 } from "lucide-react";

interface VideoEditorProps {
  videoUrl?: string;
}

const VideoEditor = ({
  videoUrl = "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
}: VideoEditorProps) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(100); // Example duration in seconds
  const [selectedTab, setSelectedTab] = useState("layout");

  return (
    <div className="grid grid-cols-[1fr_300px] gap-6 h-[600px] bg-background">
      {/* Main Editor Area */}
      <div className="space-y-4">
        {/* Video Preview */}
        <Card className="relative aspect-video bg-black overflow-hidden">
          <video
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
          />
        </Card>

        {/* Timeline */}
        <Card className="p-4">
          <div className="space-y-4">
            {/* Waveform visualization */}
            <div className="h-20 bg-secondary rounded-md">
              {/* Placeholder for waveform */}
            </div>

            {/* Timeline controls */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={0.1}
                onValueChange={(values) => setCurrentTime(values[0])}
                className="flex-1"
              />
              <span className="text-sm text-muted-foreground">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Right Sidebar */}
      <Card className="p-4">
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="layout">
              <Layout className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="background">
              <Image className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="effects">
              <Wand2 className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <ScrollArea className="h-[calc(100%-40px)] mt-4">
          <div className="space-y-4 pr-4">
            {selectedTab === "layout" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Video Position
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="number" placeholder="X" />
                    <Input type="number" placeholder="Y" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Video Size
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input type="number" placeholder="Width" />
                    <Input type="number" placeholder="Height" />
                  </div>
                </div>
              </div>
            )}

            {selectedTab === "background" && (
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Add Background Image
                </Button>
                <Button variant="outline" className="w-full">
                  Add Solid Color
                </Button>
              </div>
            )}

            {selectedTab === "effects" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Brightness
                  </label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Contrast
                  </label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Saturation
                  </label>
                  <Slider defaultValue={[50]} max={100} step={1} />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

export default VideoEditor;
