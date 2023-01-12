import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Topsection() {
  return (
    <div className="top-side">
      <h1>Your user research Swiss Army Knife</h1>
      <div className="button-used">
        <button className="button">
          See all features
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
}

export default Topsection;
