import React, { useEffect, useState } from "react";

function UseEffectHook() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  function callthisOnUnmount() {
    console.log("unmounted");
  }

  // We can catch different states in react during mounting , update and unmount using useEffect() hook

  useEffect(() => {
    console.log(counter, "counter updated");

    return callthisOnUnmount;
  }, [counter]);

  useEffect(() => {
    console.log("Name updated");

    return callthisOnUnmount;
  }, [name]);

  useEffect(() => {
    console.log("First time mounted");
  }, []);

  useEffect(() => {
    console.log("re-rendering happened");
  });

  return (
    <div>
      <p>{counter}</p>
      <input type="text" onChange={(event) => setName(event.target.value)} />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectHook;
