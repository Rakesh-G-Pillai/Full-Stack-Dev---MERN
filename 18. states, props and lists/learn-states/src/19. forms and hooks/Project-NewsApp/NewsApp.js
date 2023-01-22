import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const [query, setQuery] = useState("tesla");
  const apiKey = "423e7b1f23db4712aa7b84197a4aa2a5";
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2022-12-21&sortBy=publishedAt&apiKey=${apiKey}`;

  const inputRef = useRef(null);
  const [newsList, setNewslist] = useState([]);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      setNewslist(jsonData.articles);
    } catch (e) {
      console.log(e, "error occured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    setQuery(inputValue);
  }

  return (
    <div>
      <h1 className="heading">News Daily</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input ref={inputRef} className="input" type="text" />
        <button className="Submit-Button" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
      <div className="top-div">
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
