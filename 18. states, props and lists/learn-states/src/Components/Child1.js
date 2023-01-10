import React, { useState } from "react";

//Here we access 'anyData' from App.js using props in child1
// Whatif? we want to pass some data from our child to the App, for this we use Callback(It is the most recommended method used in FAANG!)
// child to child data transfer is not preffered

function Child1(props) {
  const [CountInChild1, setCountInChild1] = useState(0);

  function updateCountInChild1() {
    setCountInChild1(CountInChild1 + 1);
    props.onCountUpdate(CountInChild1 + 1);
  }

  return (
    <div>
      <p>Inside the Child 1: {CountInChild1}</p>
      <button onClick={() => updateCountInChild1()}>Increment</button>

      {/* <button onClick={updateCountInChild1}>Increment</button> */}
    </div>
  );
}

export default Child1;
