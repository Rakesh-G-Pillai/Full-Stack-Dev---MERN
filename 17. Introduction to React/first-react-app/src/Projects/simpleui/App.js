import React from "react";
import Topsection from "./Topsection";
import Section from "./Section";
import "./App.css";

function App() {
  return (
    <div>
      <Topsection />
      <div className="Newgroup">
        <Section
          url="https://user-images.githubusercontent.com/121529943/211970817-035c7c3e-4c43-4691-8a3b-9343eb4143ad.PNG"
          heading="Card sorting"
          subHeading="Discover how people group and label information"
          headingButton="Learn more"
        />
        <Section
          url="https://user-images.githubusercontent.com/121529943/212006520-c984d025-3176-4d64-8bc1-fe9d14fd8b49.PNG"
          heading="Prototype test"
          subHeading="Discover how people navigate your Figma prototypes"
          headingButton="Learn more"
        />
        <Section
          url="https://user-images.githubusercontent.com/121529943/212006696-c7c4c4df-cf14-415b-970c-a4c49a0c6923.PNG"
          heading="First click test"
          subHeading="Test interaction with first click and navigation tests"
          headingButton="Learn more"
        />
        <Section
          url="https://user-images.githubusercontent.com/121529943/212006777-ce52190e-b014-47e5-9d65-38a1683af72f.PNG"
          heading="Design surveys"
          subHeading="Get feedback on images, videos or audio files"
          headingButton="Learn more"
        />
        <Section
          url="https://user-images.githubusercontent.com/121529943/212006829-300d1371-cf99-4190-a74f-0fd75cda25c9.PNG"
          heading="Preference tests"
          subHeading="Find out which designs users prefer and why"
          headingButton="Learn more"
        />
        <Section
          url="https://user-images.githubusercontent.com/121529943/212006893-66af45d5-796e-47e1-af4f-54e204e7f6c5.PNG"
          heading="Five second tests"
          subHeading="Test comprehensibility by measuring first impressions"
          headingButton="Learn more"
        />
      </div>
    </div>
  );
}

export default App;
