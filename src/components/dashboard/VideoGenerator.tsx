import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { CircleDot, Square, Play, Pause } from "lucide-react";

interface VideoGeneratorProps {
  script?: string;
  onRecordingComplete?: (blob: Blob) => void;
}

const VideoGenerator = ({
  script = "Welcome to this video! This is a sample script that you can read while recording.",
  onRecordingComplete = () => {},
}: VideoGeneratorProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [scrollSpeed, setScrollSpeed] = useState(50);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
      }
    };

    startWebcam();
  }, []);

  const startRecording = async () => {
    if (!videoRef.current?.srcObject) return;

    const stream = videoRef.current.srcObject as MediaStream;
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;

    mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        setRecordedChunks((prev) => [...prev, event.data]);
      }
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      onRecordingComplete(blob);
    };

    mediaRecorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setIsRecording(false);
  };

  return (
    <div className="grid grid-cols-2 gap-6 h-[600px]">
      <Card className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold mb-4">Camera Preview</h3>
        <div className="relative flex-1 bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {!isRecording ? (
              <Button
                variant="default"
                size="icon"
                className="bg-red-500 hover:bg-red-600"
                onClick={startRecording}
              >
                <CircleDot className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                variant="default"
                size="icon"
                className="bg-red-500 hover:bg-red-600"
                onClick={stopRecording}
              >
                <Square className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </Card>

      <Card className="p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Teleprompter</h3>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsPaused(!isPaused)}
          >
            {isPaused ? (
              <Play className="h-4 w-4" />
            ) : (
              <Pause className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Scroll Speed</span>
            <span>{scrollSpeed}%</span>
          </div>
          <Slider
            value={[scrollSpeed]}
            onValueChange={(values) => setScrollSpeed(values[0])}
            max={100}
            step={1}
          />
        </div>

        <ScrollArea className="flex-1 p-4 border rounded-lg">
          <div className="prose prose-sm">
            {script.split("\n").map((line, i) => (
              <p key={i} className="mb-4">
                {line}
              </p>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default VideoGenerator;
