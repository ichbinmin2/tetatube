import React, { useState } from "react";
import styles from "../video_item/video_item.module.css";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoItem = ({ video, video: { snippet }, onVideoClick }) => {
  const [onHeart, setOnHeart] = useState(true);

  const handlerHeart = (event) => {
    setOnHeart(!onHeart);
    console.log(onHeart);
  };
  return (
    <li className={styles.itemBox}>
      <div className={styles.item}>
        <img
          className={styles.image}
          src={snippet.thumbnails.medium.url}
          alt="thumnails"
          onClick={() => onVideoClick(video)}
        />
        <div className={styles.content}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channelTitle}>{snippet.channelTitle}</p>
        </div>

        <button
          className={onHeart === true ? styles.icon : styles.clickIcon}
          onClick={handlerHeart}
        >
          <FontAwesomeIcon icon={faGratipay} />
        </button>
      </div>
    </li>
  );
};

export default VideoItem;
