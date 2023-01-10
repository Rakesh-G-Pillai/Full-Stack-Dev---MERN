import React, { useState } from "react";

function Fruits() {
  const [Fruits, setFruit] = useState("Apples");

  const [inputText, setInputText] = useState("");

  const updateFruit = () => {
    setFruit(inputText);
  };

  function updateInputText(event) {
    const curInputText = event.target.value;
    setInputText(curInputText);
  }

  return (
    <div>
      <p>The value of fruit is {Fruits}</p>
      <input type="text" onChange={updateInputText} />

      {/*---------------------------------- Normal usage of setFruit function -----------------------------------------------*/}

      {/* <button onClick={() => setFruit("Papaya")}>Papaya</button>
      <button onClick={() => setFruit("Mango")}>Mango</button> */}

      {/*---------------------------------- Another method by creating a function called updateFruit -----------------------------------------------*/}

      {/* <button onClick={() => updateFruit("Banana")}>Banana</button> */}

      <button onClick={() => updateFruit()}>Submit</button>
    </div>
  );
}

export default Fruits;
