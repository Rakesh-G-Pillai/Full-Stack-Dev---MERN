import React from "react";
import { MdDeleteForever } from "react-icons/md";

function Card() {
  return (
    <div className="card">
      <div className="card-title">
        <input
          className="title"
          type="text"
          placeholder="Type to add a title.."
          maxLength={20}
        />
      </div>
      <div className="card-body">
        <textarea
          className="title"
          style={{ resize: "none" }}
          maxLength={250}
          rows={8}
          cols={35}
        ></textarea>
      </div>
      <div className="card-footer">
        <span className="title">01/14/2023</span>
        <button className="save">save</button>
      </div>
    </div>
  );
}

export default Card;
