import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useState } from "react";

function Section(props) {
  const [isActive, setisActive] = useState(false);

  return (
    <div className="main">
      <div className="second-main">
        <div className="first-half">
          <button
            onClick={() => setisActive(!isActive)}
            className="first-half-button"
          >
            {props.heading}
            <h4>
              {isActive ? (
                <FontAwesomeIcon icon={faChevronUp}></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
              )}
            </h4>
          </button>
        </div>
        <div className="second-half">
          {isActive && <p>{props.description}</p>}
        </div>
      </div>
    </div>
  );
}

export default Section;
