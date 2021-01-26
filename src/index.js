import React from "react";
import ReactDOM from "react-dom";
import Detail from "./pages/detail";
import "./index.css";
import "./styles/reset.css";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <Detail youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
