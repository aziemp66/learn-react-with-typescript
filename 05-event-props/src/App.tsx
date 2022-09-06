import "./App.css";
import Button from "./Components/Button";
import Input from "./Components/Input";

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(e, id) => {
          console.log("button clicked", e);
        }}
      />
      <Input
        value="Hello"
        handleChange={(e) => {
          console.log("input changed", e);
        }}
      />
    </div>
  );
}

export default App;
