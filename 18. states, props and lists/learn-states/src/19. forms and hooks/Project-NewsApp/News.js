import React from "react";
import "./News.css";

function News({ news }) {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt="" />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <button onClick={() => window.open(news.url)} className="button">
        Read More
      </button>
    </div>
  );
}

export default News;
