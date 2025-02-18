import React from "react";
import QuickMetricsPanel from "@/components/dashboard/QuickMetricsPanel";
import TodoList from "@/components/dashboard/TodoList";
import ContentCalendar from "@/components/dashboard/ContentCalendar";

const Overview = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      <QuickMetricsPanel />
      <div className="grid grid-cols-[350px_1fr] gap-6">
        <TodoList />
        <ContentCalendar />
      </div>
    </div>
  );
};

export default Overview;
