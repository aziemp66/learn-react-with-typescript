import "./App.css";
import Greet from "./Components/Greet";

function App() {
  console.log("App component");

  return (
    <div className="App">
      <Greet name={"Azie"} messageCount={4} />
    </div>
  );
}

export default App;
