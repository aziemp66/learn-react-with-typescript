import User from "./Components/User";
import { UserContextProvider } from "./Contexts/UserContext";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<User />
			</UserContextProvider>
		</div>
	);
}

export default App;
