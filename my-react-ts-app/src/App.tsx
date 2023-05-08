import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import "./App.css";

function App() {
	const personName = {
		first: "Ivanka",
		last: "Lopes",
	};

	const nameList = [
		{
			first: "Bruce",
			last: "Wayne",
		},
		{
			first: "Clark",
			last: "Kent",
		},
		{
			first: "Princess",
			last: "Diana",
		},
	];

	return (
		<>
			<div className='App'>
				<Greet name='Ivanka' isLoggedIn={false} messageCount={20}></Greet>
				<Person name={personName}></Person>

				<h3 style={{ marginTop: "100px" }}>NameList:</h3>
				<PersonList names={nameList}></PersonList>
			</div>
		</>
	);
}

export default App;
