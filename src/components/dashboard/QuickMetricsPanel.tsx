import React from "react";
import { Card } from "@/components/ui/card";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { TrendingUp, Users, Clock } from "lucide-react";

interface QuickMetricsPanelProps {
  metrics?: {
    views: {
      total: number;
      trend: number[];
    };
    subscribers: {
      total: number;
      trend: number[];
    };
    watchTime: {
      total: number;
      trend: number[];
    };
  };
}

const QuickMetricsPanel = ({
  metrics = {
    views: {
      total: 125000,
      trend: [45, 52, 49, 60, 67, 71, 65, 75, 80, 82],
    },
    subscribers: {
      total: 12500,
      trend: [30, 32, 35, 34, 38, 40, 42, 45, 48, 50],
    },
    watchTime: {
      total: 450000,
      trend: [120, 125, 130, 135, 140, 138, 145, 150, 155, 160],
    },
  },
}: QuickMetricsPanelProps) => {
  return (
    <Card className="w-full p-6 bg-background">
      <h2 className="text-xl font-semibold mb-4">Channel Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Total Views</span>
            </div>
            <span className="text-2xl font-bold">
              {metrics.views.total.toLocaleString()}
            </span>
          </div>
          <div className="h-[50px]">
            <Sparklines data={metrics.views.trend} height={50}>
              <SparklinesLine color="#22c55e" />
            </Sparklines>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Subscribers</span>
            </div>
            <span className="text-2xl font-bold">
              {metrics.subscribers.total.toLocaleString()}
            </span>
          </div>
          <div className="h-[50px]">
            <Sparklines data={metrics.subscribers.trend} height={50}>
              <SparklinesLine color="#3b82f6" />
            </Sparklines>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Watch Time (hrs)
              </span>
            </div>
            <span className="text-2xl font-bold">
              {Math.round(metrics.watchTime.total / 60).toLocaleString()}
            </span>
          </div>
          <div className="h-[50px]">
            <Sparklines data={metrics.watchTime.trend} height={50}>
              <SparklinesLine color="#f43f5e" />
            </Sparklines>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default QuickMetricsPanel;
