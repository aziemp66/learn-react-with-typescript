import CustomComponent from "./Components/CustomComponent";

function App() {
	return (
		<div className="App">
			<CustomComponent isLoggedIn key={2} messageCount={2} name="Azie" />
		</div>
	);
}

export default App;
