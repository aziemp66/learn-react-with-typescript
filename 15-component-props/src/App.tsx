import "./App.css";
import Private from "./Component/Private";
import Profile from "./Component/Profile";

function App() {
	return (
		<div className="App">
			<Private isLoggedIn={true} component={Profile} />
		</div>
	);
}

export default App;
