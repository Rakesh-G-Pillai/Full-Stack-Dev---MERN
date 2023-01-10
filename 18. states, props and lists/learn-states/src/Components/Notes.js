import React, { useState } from "react";
import SingleNote from "./SingleNote";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [curNote, setCurNote] = useState("");

  //   const [Car, setCar] = useState({
  //     model: "Innova",
  //     year: "2018",
  //     color: "white",
  //   });

  //   setCar({ ...Car, color: "red" });

  function addNote(event) {
    //spread operator(...) is very very useful
    const newNotesArray = [...notes, curNote];
    setNotes(newNotesArray);
  }

  function updateCurNote(event) {
    setCurNote(event.target.value);
  }

  const ulStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    listStyle: "none",
    gap: "10px",
    marginRight: "30px",
  };

  return (
    <div>
      <input onChange={updateCurNote} type="text" />
      <button onClick={addNote}>Submit</button>
      <ul style={ulStyle}>
        {notes.map((note, i) => {
          return (
            <li key={i}>
              <SingleNote note={note} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Notes;
