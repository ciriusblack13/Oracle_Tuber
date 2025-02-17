import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, BarChart3, Activity } from "lucide-react";

interface CompetitorData {
  id: string;
  name: string;
  avatar: string;
  subscribers: number;
  views: number;
  engagement: number;
  uploadFrequency: number;
}

interface CompetitorAnalysisProps {
  competitors?: CompetitorData[];
  onCompetitorSelect?: (id: string) => void;
}

const CompetitorAnalysis = ({
  competitors = [
    {
      id: "1",
      name: "TechReviewer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tech",
      subscribers: 500000,
      views: 2000000,
      engagement: 85,
      uploadFrequency: 70,
    },
    {
      id: "2",
      name: "GamingPro",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gaming",
      subscribers: 750000,
      views: 3000000,
      engagement: 92,
      uploadFrequency: 85,
    },
    {
      id: "3",
      name: "LifestyleVlog",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lifestyle",
      subscribers: 250000,
      views: 1000000,
      engagement: 78,
      uploadFrequency: 60,
    },
  ],
  onCompetitorSelect = () => {},
}: CompetitorAnalysisProps) => {
  return (
    <Card className="w-full h-full p-6 bg-background">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Competitor Analysis</h2>
        <Button variant="outline" className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          Add Competitor
        </Button>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="metrics">Detailed Metrics</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6">
              {competitors.map((competitor) => (
                <Card
                  key={competitor.id}
                  className="p-4 cursor-pointer hover:bg-accent/50 transition-colors"
                  onClick={() => onCompetitorSelect(competitor.id)}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <img src={competitor.avatar} alt={competitor.name} />
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">{competitor.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {competitor.subscribers.toLocaleString()} subscribers
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Engagement
                        </span>
                        <span>{competitor.engagement}%</span>
                      </div>
                      <Progress value={competitor.engagement} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Upload Frequency
                        </span>
                        <span>{competitor.uploadFrequency}%</span>
                      </div>
                      <Progress value={competitor.uploadFrequency} />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>

        <TabsContent value="metrics">
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
                <h4 className="font-semibold">View Comparison</h4>
              </div>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="h-4 w-4 text-muted-foreground" />
                <h4 className="font-semibold">Engagement Rates</h4>
              </div>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <h4 className="font-semibold">Growth Trends</h4>
              </div>
              <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <div className="flex items-center justify-center h-[400px] text-muted-foreground">
            Trend analysis coming soon...
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default CompetitorAnalysis;
