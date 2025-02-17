import React from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, TrendingUp, Star, ArrowRight } from "lucide-react";

interface SuggestionCardProps {
  title: string;
  category: string;
  trend: string;
  potential: string;
  isHot?: boolean;
}

const SuggestionCard = ({
  title = "How to Start a YouTube Channel in 2024",
  category = "Tutorial",
  trend = "+45%",
  potential = "High",
  isHot = false,
}: SuggestionCardProps) => (
  <Card className="p-4 space-y-3 hover:shadow-lg transition-shadow bg-card">
    <div className="flex justify-between items-start">
      <h3 className="font-semibold text-lg">{title}</h3>
      {isHot && <Flame className="h-5 w-5 text-red-500" />}
    </div>
    <div className="flex gap-2">
      <Badge variant="secondary">{category}</Badge>
      <Badge variant="outline" className="text-green-500">
        <TrendingUp className="h-3 w-3 mr-1" />
        {trend}
      </Badge>
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-500" />
        <span className="text-sm text-muted-foreground">
          Potential: {potential}
        </span>
      </div>
      <Button variant="ghost" size="sm">
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  </Card>
);

interface ContentSuggestionsProps {
  suggestions?: Array<SuggestionCardProps>;
}

const ContentSuggestions = ({
  suggestions = [
    {
      title: "Top 10 AI Tools for Content Creators",
      category: "Review",
      trend: "+65%",
      potential: "High",
      isHot: true,
    },
    {
      title: "Mastering Video Editing in DaVinci Resolve",
      category: "Tutorial",
      trend: "+45%",
      potential: "Medium",
    },
    {
      title: "Why ChatGPT is Changing Everything",
      category: "Analysis",
      trend: "+80%",
      potential: "High",
      isHot: true,
    },
    {
      title: "Building a Home Studio Under $500",
      category: "Tutorial",
      trend: "+30%",
      potential: "Medium",
    },
    {
      title: "React vs Vue in 2024",
      category: "Comparison",
      trend: "+25%",
      potential: "Medium",
    },
    {
      title: "Making Money on YouTube: Complete Guide",
      category: "Guide",
      trend: "+55%",
      potential: "High",
    },
  ],
}: ContentSuggestionsProps) => {
  return (
    <Card className="w-full h-[400px] p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold">Content Suggestions</h2>
          <p className="text-muted-foreground">
            Trending topics tailored for your channel
          </p>
        </div>
        <Button>
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="h-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-4">
          {suggestions.map((suggestion, index) => (
            <SuggestionCard key={index} {...suggestion} />
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ContentSuggestions;
