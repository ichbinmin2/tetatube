import React from "react";
import VideoItem from "../video_item/video_item";
import styles from "../video_list/video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.box}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} videoitem={video} />
    ))}
  </ul>
);

export default VideoList;
