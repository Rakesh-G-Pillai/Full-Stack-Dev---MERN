import React from "react";
import Toggle from "./Toggle";
import "./App.css";
import Search from "./Search";
import Card from "./Card";

function App() {
  return (
    <div>
      <div className="top">
        <h1>Notes</h1>
        <Toggle />
      </div>
      <Search />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
