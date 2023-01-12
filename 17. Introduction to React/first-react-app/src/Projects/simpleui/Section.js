import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function Section(props) {
  return (
    <div className="group">
      <img style={{ height: "50px", width: "50px" }} src={props.url} alt="" />
      <h2>{props.heading}</h2>
      <p style={{ fontSize: "160%" }} className="button-used">
        {props.subHeading}
      </p>
      <button className="button">
        {props.headingButton}
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default Section;
