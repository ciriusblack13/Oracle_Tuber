import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Video, MessageSquare, Star } from "lucide-react";

interface TemplateSelectorProps {
  onTemplateSelect?: (template: string) => void;
  onToneChange?: (tone: number) => void;
  onLengthChange?: (length: number) => void;
  selectedTemplate?: string;
  tone?: number;
  length?: number;
}

const TemplateSelector = ({
  onTemplateSelect = () => {},
  onToneChange = () => {},
  onLengthChange = () => {},
  selectedTemplate = "tutorial",
  tone = 50,
  length = 5,
}: TemplateSelectorProps) => {
  return (
    <Card className="h-full w-[300px] p-4 bg-background border-r">
      <ScrollArea className="h-full pr-4">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Choose Template</h3>
            <RadioGroup
              defaultValue={selectedTemplate}
              onValueChange={onTemplateSelect}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="tutorial" id="tutorial" />
                <Label
                  htmlFor="tutorial"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Video className="h-4 w-4" />
                  Tutorial
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="review" id="review" />
                <Label
                  htmlFor="review"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Star className="h-4 w-4" />
                  Review
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="entertainment" id="entertainment" />
                <Label
                  htmlFor="entertainment"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="h-4 w-4" />
                  Entertainment
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-4">Tone</h3>
              <Slider
                defaultValue={[tone]}
                max={100}
                step={1}
                onValueChange={(values) => onToneChange(values[0])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Professional</span>
                <span>Casual</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Length (minutes)</h3>
              <Slider
                defaultValue={[length]}
                max={30}
                step={1}
                onValueChange={(values) => onLengthChange(values[0])}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>Short</span>
                <span>Long</span>
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg">
            Generate Script
          </Button>
        </div>
      </ScrollArea>
    </Card>
  );
};

export default TemplateSelector;
