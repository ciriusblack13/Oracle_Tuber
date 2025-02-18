import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Search, MoreVertical } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

interface Competitor {
  id: string;
  name: string;
  avatar: string;
  subscribers: number;
}

interface SavedCompetitorsProps {
  competitors?: Competitor[];
  onSelect?: (ids: string[]) => void;
}

export default function SavedCompetitors({
  competitors = [
    {
      id: "1",
      name: "MrBeast",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=beast",
      subscribers: 353000000,
    },
    {
      id: "2",
      name: "Dude Perfect",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dude",
      subscribers: 60800000,
    },
  ],
  onSelect = () => {},
}: SavedCompetitorsProps) {
  return (
    <Card className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Saved Competitors</h3>
        <button className="text-sm text-primary">Select all</button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search Competitors" className="pl-8" />
      </div>

      <div className="space-y-2">
        {competitors.map((competitor) => (
          <div
            key={competitor.id}
            className="flex items-center justify-between p-2 hover:bg-accent rounded-md"
          >
            <div className="flex items-center gap-3">
              <Checkbox id={competitor.id} />
              <Avatar className="h-8 w-8">
                <img src={competitor.avatar} alt={competitor.name} />
              </Avatar>
              <div>
                <p className="font-medium">{competitor.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(competitor.subscribers / 1000000).toFixed(1)}M subscribers
                </p>
              </div>
            </div>
            <button>
              <MoreVertical className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
