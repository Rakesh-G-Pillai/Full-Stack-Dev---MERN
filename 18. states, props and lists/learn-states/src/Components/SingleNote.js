import React from "react";

function SingleNote(props) {
  const singleNote = {
    padding: "20px",
    borderRadius: "10px",
    border: "2px solid green",
    backgroundColor: "lightgreen",
  };

  return (
    <div style={singleNote} className="singleNote">
      <p className="noteText">{props.note}</p>
    </div>
  );
}

export default SingleNote;
