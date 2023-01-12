import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
// import App from "./App";
// Changed for new project:
import App from "./Projects/simpleui/App";
//import Card from "./Components/Card";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
const name = "Rakesh";

const headingStyle = {
  backgroundColor: "red",
  padding: "20px",
  border: "10px solid green",
};

const sayHi = true;
let subheading = "";
if (sayHi) {
  subheading = "Hi";
} else {
  subheading = "Bye";
}

const myVar = (
  <div>
    <h1 style={headingStyle} className="heading">
      Hello I am in JSX {name}
    </h1>
    <p className="subheading">{sayHi ? "hi" : "Bye"}</p>
    <p className="subheading">{subheading}</p>
  </div>
);
*/

// root.render(myVar);

// function myClock() {
//   root.render(
//     <div>
//       <p style={{ fontSize: "3rem" }}>{new Date().toLocaleTimeString()}</p>
//       <h1>This will not be re-generated </h1>
//     </div>
//   );
//   setTimeout(myClock, 1000);
// }

// myClock();

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ----------------------React components and props --------------------------------------------

//-------------Functional Component---------------------

/*
function Card() {
  return (
    <div>
      <h1>My name is Rakesh G Pillai</h1>
      <p>rakesh@gmail.com</p>
    </div>
  );
}
*/

// --------------Class Components (old method not used now, some old companies use)------------------------

/*
class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}</p>
        <h1>Hi</h1>
      </div>
    );
  }
}
*/

/*
const Newname = "Rakesh";

root.render(
  <div>
    <Card />
    <Card />
    <Welcome name={Newname} />
  </div>
);
*/

// ------------------------ functional components ----> props --------------------------
/*
function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.emailId}</p>
    </div>
  );
}
*/

// -----------------using destructuring( PREFERRED METHOD)-------------------------

/*
function Card({ name, ...props }) {
  //email can be accessed using props

  const CardStyle = {
    padding: "10px",
    border: "2px solid black",
    margin: "20px",
    boxShadow: "2px 2px gray",
  };

  return (
    <div style={CardStyle}>
      <Avatar image={image} Name={Name} />
      <h1>{name}</h1>
      <p>{props.emailId}</p>
    </div>
  );
}
*/

// ---------Composing components --------------------

/*
function Avatar(props) {
  return <img src={props.image} alt={props.Name} />;
}
*/

/*
const Newname = "Rakesh";
const NewEmailId = "rakesh@gmail.com";

const Image =
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=106&t=st=1673143323~exp=1673143923~hmac=9470868754af84f3170a0ff875f4eda36ceb0de381c55a6ecde29da98965ffd0";


root.render(
  <div style={{ display: "flex" }}>
    <Card name={Newname} emailId={NewEmailId} image={Image} />
    <Card name={Newname} emailId={NewEmailId} />
    <Card name={Newname} emailId={NewEmailId} />
    <Card name={Newname} emailId={NewEmailId} />
  </div>
);
*/
