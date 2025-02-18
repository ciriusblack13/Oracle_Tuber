import React from "react";
import CompetitorSearch from "@/components/competitors/CompetitorSearch";
import ChannelAnalytics from "@/components/competitors/ChannelAnalytics";
import VideoList from "@/components/competitors/VideoList";
import SavedCompetitors from "@/components/competitors/SavedCompetitors";

const Competitors = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Competitors</h1>

      <div className="grid grid-cols-[1fr_1.5fr] gap-6">
        <div className="space-y-6">
          <CompetitorSearch
            onSearch={(query) => console.log("Searching:", query)}
          />
          <ChannelAnalytics />
          <SavedCompetitors />
        </div>

        <VideoList />
      </div>
    </div>
  );
};

export default Competitors;
