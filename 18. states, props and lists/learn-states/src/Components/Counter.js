import React, { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  // render function is called only once(reason why count is not updated), so inorder to call it multiple times we use states in react

  function updateCount() {
    setCount(count + 1);

    console.log("count is:", count);
  }
  return (
    <div>
      <p>The value of count is: {count}</p>
      <button onClick={updateCount}>Increment</button>
    </div>
  );
}

export default Counter;

// click, onClick
// hover
