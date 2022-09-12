import "./App.css";
import List from "./Components/List";

function App() {
	return (
		<div className="App">
			{/* <List
				items={["Batman", "Superman", "Wonder Woman"]}
				onClick={(item) => {
					console.log(item);
				}}
			/>
			<List
				items={[1, 2, 3, 4, 5]}
				onClick={(item) => {
					console.log(item);
				}}
			/> */}
			<List
				items={[
					{
						id: 1,
						first: "Bruce",
						last: "Wayne",
					},
					{
						id: 2,
						first: "Clark",
						last: "Kent",
					},
					{
						id: 3,
						first: "Diana",
						last: "Princess",
					},
				]}
				onClick={(item) => {
					console.log(item);
				}}
			/>
		</div>
	);
}

export default App;
