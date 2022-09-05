import "./App.css";
import Status from "./Components/Status";
import Heading from "./Components/Heading";
import Oscar from "./Components/Oscar";
import Greet from "./Components/Greet";

const App = () => {
  return (
    <div className="App">
      <Status status="loading" />
      <Oscar>
        <Heading>Place Holder Text</Heading>
      </Oscar>
      <Greet name="Azie" isLoggedIn={true} />
    </div>
  );
};

export default App;
