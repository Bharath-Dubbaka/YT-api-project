import React from "react";
import VideoItems from "./VideoItems";

export default function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoItems
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}
