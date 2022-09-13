import "./App.css";
import RandomNumber from "./Components/RandomNumber";

function App() {
	return (
		<div className="App">
			<RandomNumber value={10} isPositive />
		</div>
	);
}

export default App;
