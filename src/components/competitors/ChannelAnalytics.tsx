import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar } from "@/components/ui/avatar";
import { BarChart3, Users, Clock, TrendingUp } from "lucide-react";

interface ChannelAnalyticsProps {
  channel?: {
    name: string;
    avatar: string;
    subscribers: number;
    totalViews: number;
    videosCount: number;
    avgViewsPerVideo: number;
    uploadFrequency: number;
    engagement: number;
  };
}

export default function ChannelAnalytics({
  channel = {
    name: "FusionAI",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=fusion",
    subscribers: 100,
    totalViews: 1800,
    videosCount: 8,
    avgViewsPerVideo: 219,
    uploadFrequency: 75,
    engagement: 5.7,
  },
}: ChannelAnalyticsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <img src={channel.avatar} alt={channel.name} />
        </Avatar>
        <div>
          <h2 className="text-xl font-semibold">{channel.name}</h2>
          <p className="text-muted-foreground">
            {channel.subscribers.toLocaleString()} subscribers
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Total Views</span>
          </div>
          <p className="text-2xl font-bold">
            {channel.totalViews.toLocaleString()}
          </p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Videos</span>
          </div>
          <p className="text-2xl font-bold">{channel.videosCount}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Avg. Views/Video</span>
          </div>
          <p className="text-2xl font-bold">{channel.avgViewsPerVideo}</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">Sub/View Ratio</span>
          </div>
          <p className="text-2xl font-bold">{channel.engagement}%</p>
        </Card>
      </div>

      <Card className="p-4">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium">Upload Frequency</span>
          <span className="text-sm text-muted-foreground">
            {channel.uploadFrequency}%
          </span>
        </div>
        <Progress value={channel.uploadFrequency} />
      </Card>
    </div>
  );
}
