import "./App.css";
import Card from "./Components/Card";

const Newname = "Rakesh";
const NewEmailId = "rakesh@gmail.com";

const Image =
  "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=106&t=st=1673143323~exp=1673143923~hmac=9470868754af84f3170a0ff875f4eda36ceb0de381c55a6ecde29da98965ffd0";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card name={Newname} emailId={NewEmailId} image={Image} />
      <Card name={Newname} emailId={NewEmailId} />
      <Card name={Newname} emailId={NewEmailId} />
      <Card name={Newname} emailId={NewEmailId} />
    </div>
  );
}

export default App;
