import React from "react";
import "./videoItems.css";

export default function VideoItems({ video, onVideoSelect }) {
  // console.log(props);

  //   const onItemClick = (e) => {
  //     console.log(video.id.videoId)
  //     return onVideoSelect(video.id.videoId)
  //   };
  return (
    <div
      //   onClick={onItemClick}
      onClick={() => onVideoSelect(video)}
      className="item video-items"
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        className="ui image"
      />
      <div className="content custom-class-for">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
