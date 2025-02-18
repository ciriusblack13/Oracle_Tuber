import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, RefreshCcw } from "lucide-react";

interface CompetitorSearchProps {
  onSearch: (query: string) => void;
}

export default function CompetitorSearch({
  onSearch = () => {},
}: CompetitorSearchProps) {
  return (
    <div className="w-full space-y-4">
      <h2 className="text-xl font-semibold">Search Competitors</h2>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search YouTube channels..."
            className="pl-8"
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
        <Button variant="outline" size="icon">
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
