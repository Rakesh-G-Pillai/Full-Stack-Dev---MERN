import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";

const question = <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>;

function App() {
  return (
    <div>
      <h1 className="main-top">Frequently Asked Questions</h1>
      <Section
        heading={"What is an API request or Call?"}
        description="API call/Request is an request made to our API server through HTTPS to get data."
      />
      <Section
        heading="What is your weather data source?"
        description="We get our weather data from thousands of global private and public weather stations and weather data providers in the world"
      />
      <Section
        heading="How often is data updated?"
        description="Realtime weather is updated every 10-15 minutes.Whereas forecast weather data is updated every 4-6 hours in a day "
      />
      <Section
        heading="Is Historical data from actuals?"
        description="Historical data includes most data generated either manually or automatically within an enterprise"
      />
      <Section
        heading="What payment methods do you have?"
        description="Includes online payment services, digital currencies, cash, debit cards, credit cards, checks and electronic transfers."
      />
    </div>
  );
}

export default App;
