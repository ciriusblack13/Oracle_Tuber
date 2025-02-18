import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Download } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  views: number;
  viewsPerHour: number;
  publishedAt: string;
}

interface VideoListProps {
  videos?: Video[];
}

export default function VideoList({
  videos = [
    {
      id: "1",
      thumbnail: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
      title: "Every Minute One Person Is Eliminated",
      views: 64199379,
      viewsPerHour: 426600.5,
      publishedAt: "6 days ago",
    },
    {
      id: "2",
      thumbnail: "https://images.unsplash.com/photo-1682687982501-1e58ab814714",
      title: "Dude Perfect vs Keanu Reeves (150 MPH)",
      views: 3228476,
      viewsPerHour: 21171.3,
      publishedAt: "6 days ago",
    },
  ],
}: VideoListProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Competitor videos</h2>
        <div className="flex items-center gap-2">
          <Label htmlFor="include-channel">Include my channel</Label>
          <Switch id="include-channel" />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search video" className="pl-8" />
        </div>
        <select className="px-3 py-2 rounded-md border">
          <option>Views</option>
          <option>Date</option>
          <option>Duration</option>
        </select>
        <select className="px-3 py-2 rounded-md border">
          <option>This week</option>
          <option>This month</option>
          <option>This year</option>
        </select>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="long">Long Videos</TabsTrigger>
          <TabsTrigger value="shorts">Shorts</TabsTrigger>
          <TabsTrigger value="playlists">Playlists</TabsTrigger>
          <TabsTrigger value="live">Live</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {videos.map((video) => (
            <Card key={video.id} className="p-4 flex gap-4">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-48 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold mb-2">{video.title}</h3>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span>{video.views.toLocaleString()} views</span>
                  <span>•</span>
                  <span>{video.publishedAt}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm">
                    {video.viewsPerHour.toLocaleString()} views/hour
                  </span>
                  <Download className="h-4 w-4 cursor-pointer" />
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
