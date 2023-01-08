import React from "react";
import Avatar from "./Avatar";

const image = "https://via.placeholder.com/100";
const Name = "Rakesh";

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
      <Avatar image={props.image} Name={Name} />
      <h1>{name}</h1>
      <p>{props.emailId}</p>
    </div>
  );
}

export default Card;
