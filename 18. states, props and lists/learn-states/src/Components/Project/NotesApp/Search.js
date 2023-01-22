import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="search-length">
      <input className="search" type="text" placeholder="type to search..." />
      <FontAwesomeIcon className="position" icon={faSearch}></FontAwesomeIcon>
    </div>
  );
}

export default Search;
