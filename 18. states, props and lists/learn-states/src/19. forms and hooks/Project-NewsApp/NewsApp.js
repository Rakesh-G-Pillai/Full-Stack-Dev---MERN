import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

function NewsApp() {
  const [query, setQuery] = useState("apple");
  const apiKey = "423e7b1f23db4712aa7b84197a4aa2a5";
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-01-21&to=2023-01-21&sortBy=popularity&apiKey=${apiKey}`;

  const inputRef = useRef(null);
  const recentSearchRef = useRef(null);
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
    const button = document.createElement("button");
    button.innerText = inputValue;
    button.style.backgroundColor = "black";
    button.style.color = "white";
    button.style.margin = "10px";
    button.onclick = () => {
      setQuery(inputValue);
      inputRef.current.value = inputValue;
      // console.log(inputValue + "clicked");      --------------> Used for debugging
    };
    recentSearchRef.current.appendChild(button);
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
      <div className="recentSearch" ref={recentSearchRef}>
        <h6>Recent Searches</h6>
      </div>
      <div className="top-div">
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
