import React, { useEffect, useState } from "react";
import Nav from "../components/nav/nav";
import VideoList from "../components/video_list/video_list";

const Detail = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=HAIM&key=AIzaSyBQO5uEgqO95vZKZU5lJiB2SotT7poyfA4",
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => setVideos(result.items),
        console.log("데이터를 받아왔어요")
      )
      .catch((error) => console.log("e에러남rror", error));
  }, []);
  return (
    <>
      <Nav />

      <VideoList videos={videos} />
    </>
  );
};

export default Detail;
