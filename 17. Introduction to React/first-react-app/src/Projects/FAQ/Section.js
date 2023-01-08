import "./App.css";

const Section = (props) => {
  return (
    <div className="main">
      <div className="first-half">
        <button className="first-half-button">{props.heading}</button>
      </div>
      <div className="second-half">
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Section;
