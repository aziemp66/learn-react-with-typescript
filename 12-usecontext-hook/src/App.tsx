import Box from "./Components/Box";
import { ThemeContextProvider } from "./Contexts/ThemeContext";

function App() {
	return (
		<div className="App">
			<ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
		</div>
	);
}

export default App;
