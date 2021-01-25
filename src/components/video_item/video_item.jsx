import React from "react";

const VideoItem = (props) => {
  return (
    <section>
      <img src={props.thumbnailsUrl} alt="thumnails" />
      <h1>{props.video.snippet.title}</h1>
      <span>{props.video.snippet.description}</span>
    </section>
  );
};

export default VideoItem;
