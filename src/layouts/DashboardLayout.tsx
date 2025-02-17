import React from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LayoutDashboard, Beaker, TrendingUp, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    icon: LayoutDashboard,
    label: "Overview",
    path: "/",
  },
  {
    icon: Beaker,
    label: "Lab",
    path: "/lab",
  },
  {
    icon: TrendingUp,
    label: "Content Ideas",
    path: "/content-ideas",
  },
  {
    icon: Users,
    label: "Competitors",
    path: "/competitors",
  },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r bg-card">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h1 className="text-xl font-bold mb-6">Content Hub</h1>
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Button
                  key={item.path}
                  variant={
                    location.pathname === item.path ? "secondary" : "ghost"
                  }
                  className={cn(
                    "w-full justify-start gap-2",
                    location.pathname === item.path && "bg-secondary",
                  )}
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>
        </ScrollArea>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="container py-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
