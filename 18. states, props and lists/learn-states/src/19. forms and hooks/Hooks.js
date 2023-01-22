import React, { useEffect, useRef, useState } from "react";

function Hooks() {
  const [counter, setCounter] = useState(0);
  let normalCounter = 0;
  const refCounter = useRef(0);

  useEffect(() => {
    console.log("State counter", counter);
    console.log("normal counter", normalCounter);
    console.log("ref counter", refCounter.current); //useRef returns an object with property as current which holds the current value of refCounter
    return () => {
      console.log("unmounting components");
    };
  });

  function increment() {
    setCounter(counter + 1);
    normalCounter = normalCounter + 1;
    refCounter.current = refCounter.current + 1;
  }

  return (
    <div>
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Hooks;
