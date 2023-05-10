import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/input";

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
				<Greet name='Ivanka' isLoggedIn={true} messageCount={20}></Greet>
				<Person name={personName}></Person>

				<h3 className='videoTopic'>
					<hr />
					NameList:
				</h3>
				<PersonList names={nameList}></PersonList>

				<h3 className='videoTopic'>
					<hr />
					Advanced props
				</h3>
				<Status status='error'></Status>
				<Oscar>
					<Heading>Oscar goes to Dicaprio</Heading>
				</Oscar>
				<Greet name='Ivanka' isLoggedIn={false}></Greet>

				<h3 className='videoTopic'>
					<hr />
					Event Props
				</h3>
				<Button
					handleClick={(event, id) => {
						console.log("Button clicked", event, id);
					}}
				></Button>
				<Input value='' handleChange={(event) => console.log(event)}></Input>
			</div>
		</>
	);
}

export default App;
