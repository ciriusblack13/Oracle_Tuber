import React from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  LayoutDashboard,
  Beaker,
  TrendingUp,
  Users,
  Settings,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const mainItems = [
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

const bottomItems = [
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
];

const DashboardLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 border-r bg-black/40 backdrop-blur-xl">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h1 className="text-xl font-bold mb-6">Content Hub</h1>
            <div className="flex flex-col h-[calc(100vh-120px)]">
              <nav className="space-y-2">
                {mainItems.map((item) => (
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
              <nav className="mt-auto space-y-2">
                <ThemeToggle />
                {bottomItems.map((item) => (
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
