import React, { useRef, useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  //const nameInput = document.getElementById('');
  const nameInputRef = useRef(null);
  const nameInputValueRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault(); //default nature of form is to reload after submit, to prevent that we use event.preventDefault();
    //console.log(nameInputRef.current);  In this step we will be able to access/reference the <input>
    const nameInputValue = nameInputRef.current.value;
    const fruitInputValue = nameInputValueRef.current.value;
    alert(nameInputValue + fruitInputValue);
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  const arr = [1, 2, 3, 4, 5, 6, 7];
  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", margin: "20px" }}>
      <label htmlFor="">Name</label>
      {/* Here when we use onChange then for every keystroke/any change in input will change the value of name (trigger the event)*/}
      {/* <input type="text" onChange={(event) => setName(event.target.value)}/> */}
      <input type="text" ref={nameInputRef} />
      <br />
      <select ref={nameInputValueRef} onChange={handleChange}>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <br />
      <button onClick={handleSubmit}>Submit</button>

      <select name="" id="">
        {arr.map((element) => {
          return <option value="">choose {element}</option>;
        })}
      </select>
    </form>
  );
}

export default UserForm;

//React LifeCycle Events
