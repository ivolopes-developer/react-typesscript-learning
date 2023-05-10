import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
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
				<h3 className='videoTopic'>NameList:</h3>
				<PersonList names={nameList}></PersonList>

				<h3 className='videoTopic'>Advanced props</h3>
				<Status status='error'></Status>
				<Oscar>
					<Heading>Oscar goes to Dicaprio</Heading>
				</Oscar>
				<Greet name='Ivanka' isLoggedIn={false}></Greet>
			</div>
		</>
	);
}

export default App;
