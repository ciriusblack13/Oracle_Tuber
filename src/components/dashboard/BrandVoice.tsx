import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface BrandVoice {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

interface BrandVoiceProps {
  voices?: BrandVoice[];
  onNewVoice?: () => void;
  onEditVoice?: (id: string) => void;
  onDeleteVoice?: (id: string) => void;
  onUseVoice?: (id: string) => void;
}

export default function BrandVoice({
  voices = [
    {
      id: "1",
      name: "Fusion AI - Brand Voice Guide",
      description: "Brand Personality: Fusion AI...",
      createdAt: "22/01/2025",
    },
  ],
  onNewVoice = () => {},
  onEditVoice = () => {},
  onDeleteVoice = () => {},
  onUseVoice = () => {},
}: BrandVoiceProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Brand voice</h2>
          <p className="text-muted-foreground">
            Your brand voice description captures the distinct personality,
            tone, and style of your messaging. It should be clear, specific, and
            actionable, enabling anyone—AI or human—to create content that feels
            unmistakably aligned with your brand's identity.
          </p>
        </div>
        <Button onClick={onNewVoice} className="gap-2">
          <Plus className="h-4 w-4" /> New Brand Voice
        </Button>
      </div>

      <ScrollArea className="h-[500px]">
        <div className="space-y-4">
          {voices.map((voice) => (
            <Card key={voice.id} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{voice.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {voice.createdAt}
                  </p>
                  <p className="mt-2">{voice.description}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEditVoice(voice.id)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDeleteVoice(voice.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                className="w-full mt-4"
                variant="secondary"
                onClick={() => onUseVoice(voice.id)}
              >
                Use This Voice
              </Button>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
