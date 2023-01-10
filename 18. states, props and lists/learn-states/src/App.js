import Counter from "./Components/Counter";
import Fruits from "./Components/Fruits";
import Notes from "./Components/Notes";
import { useState } from "react";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";

function App() {
  const [countInParent, setCountInParent] = useState(0);

  function updateCountInParent(count) {
    setCountInParent(count);
  }

  return (
    <div>
      {/* <Counter /> */}
      {/* <Fruits /> */}
      {/* <Notes /> */}
      <p>Inside the parent {countInParent}</p>
      <Child1
        // onCountUpdate={(count) => {
        //   updateCountInParent(count);
        // }}
        onCountUpdate={updateCountInParent}
      />
      <Child2 countFromParent={countInParent} />
    </div>
  );
}

export default App;
