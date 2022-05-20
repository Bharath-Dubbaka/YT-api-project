import React from "react";

export default function VideoDetail({ selectedVideo }) {
  // if(selectedVideo === null) {
  if (!selectedVideo) {
    return <div>Loading ! select any video </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="video player" frameBorder="0"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
}
