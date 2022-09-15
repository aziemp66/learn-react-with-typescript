import Text from "./Components/Text";

function App() {
	return (
		<div className="App">
			<Text as={"h1"} size="md">
				Heading
			</Text>
			<Text as={"p"} size="lg">
				Paragraph
			</Text>
			<Text as={"label"} size="sm" color="primary">
				Label
			</Text>
		</div>
	);
}

export default App;
