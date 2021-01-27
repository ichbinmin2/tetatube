import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import VideoList from "../components/video_list/video_list";
import styles from "../pages/main.module.css";
import VideoDetail from "../components/video_detail/video_detail";

function Main({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [open, setOpen] = useState(false);

  const handlerModal = (event) => {
    setOpen(!open);
    console.log(open);
  };

  const selectVideo = (video) => {
    setSelectedVideo(video);
    handlerModal();
    // state를 업데이트
    console.log(video);
  };
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <Nav onSearch={search} />
      {open && selectedVideo ? (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} modal={handlerModal} />
        </div>
      ) : null}
      <div className={styles.flex}>
        <section className={styles.content}>
          <div className={styles.videoBox}>
            <VideoList videos={videos} onVideoClick={selectVideo} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;
