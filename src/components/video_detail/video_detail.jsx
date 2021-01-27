import React from "react";
import styles from "./video_detail.module.css";

const VideoDetail = ({ video, video: { snippet }, modal }) => {
  return (
    <section className={styles.section}>
      <div className={styles.overayBox} onClick={modal} />
      <div>
        <div className={styles.header} onClick={modal}>
          <button className={styles.btn}>✖️</button>
        </div>
        <div className={styles.modalBox}>
          <iframe
            className={styles.video}
            type="text/html"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameborder="0"
            allowfullscreen
          />
          <div className={styles.textBox}>
            <div className={styles.titleBox}>
              <span className={styles.title}>{snippet.title}</span>
              <span className={styles.channel}>{snippet.channelTitle}</span>
            </div>
            <div className={styles.line} />
            <pre className={styles.description}>{snippet.description}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDetail;