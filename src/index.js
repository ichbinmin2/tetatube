import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main";
import Youtube from "./service/youtube";
import axios from "axios";
import "./index.css";

const httpClient = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);
ReactDOM.render(
  <React.StrictMode>
    <Main youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
