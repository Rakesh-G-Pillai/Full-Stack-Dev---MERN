import Counter from "./Components/Counter";
import Fruits from "./Components/Fruits";
import Notes from "./Components/Notes";
import { useState } from "react";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import UserForm from "./19. forms and hooks/UserForm";
import UseEffectHook from "./19. forms and hooks/UseEffectHook";
import Hooks from "./19. forms and hooks/Hooks";
import NewsApp from "./19. forms and hooks/Project-NewsApp/NewsApp";
import News from "./19. forms and hooks/Project-NewsApp/News";

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
      {/* <p>Inside the parent {countInParent}</p> */}
      {/* <Child1
        // onCountUpdate={(count) => {
        //   updateCountInParent(count);
        // }}
        onCountUpdate={updateCountInParent}
      />
      <Child2 countFromParent={countInParent} /> */}

      {/* Lecture 19 */}

      {/* <UserForm /> */}
      {/* <UseEffectHook /> */}
      {/* <Hooks /> */}
      <NewsApp />
    </div>
  );
}

export default App;
