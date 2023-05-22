import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import Status from "./components/Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Button } from "./components/Button";
import "./App.css";
import { Input } from "./components/Input";
import { Container } from "./components/Container";
import { UserState } from "./components/state/User";
import { Counter } from "./components/state/Counter";
import { ThemeContextProvider } from "./components/Context/ThemeContext";
import { Box } from "./components/Context/Box";
import { UserContextProvider } from "./components/Context/UserContext";
import { User } from "./components/Context/User";
import DomRef from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { CounterClass } from "./components/class/CounterClass";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Toast } from "./components/templateliterals/Toast";
import { CustomButton } from "./components/html/Button";
import { CustomComponent } from "./components/html/CustomComponent";

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
					Event Props (console logs)
				</h3>
				<Button
					handleClick={(event, id) => {
						console.log("Button clicked", event, id);
					}}
				></Button>
				<Input value='' handleChange={(event) => console.log(event)}></Input>
			</div>

			<h3 className='videoTopic'>
				<hr />
				Style Props
			</h3>
			<Container
				styles={{ border: "1px solid black", padding: "1rem" }}
			></Container>

			<h3 className='videoTopic'>
				<hr />
				useState Hook
			</h3>
			<UserState></UserState>

			<h3 className='videoTopic'>
				<hr />
				UseReducer Hook
			</h3>
			<Counter></Counter>

			<h3 className='videoTopic'>
				<hr />
				useContext Hook
			</h3>
			<ThemeContextProvider>
				<Box></Box>
			</ThemeContextProvider>

			<h3 className='videoTopic'>
				<hr />
				useContext Future Value
			</h3>
			<UserContextProvider>
				<User></User>
			</UserContextProvider>

			<h3 className='videoTopic'>
				<hr />
				useRef Hook
			</h3>
			<DomRef></DomRef>
			<MutableRef></MutableRef>

			<h3 className='videoTopic'>
				<hr />
				Class Component
			</h3>
			<CounterClass message='The count value is'></CounterClass>

			<h3 className='videoTopic'>
				<hr />
				Component Prop
			</h3>
			<Private isLoggedIn={true} component={Profile}></Private>

			<h3 className='videoTopic'>
				<hr />
				Template literals and Exclude
			</h3>
			<Toast position='center'></Toast>

			<h3 className='videoTopic'>
				<hr />
				Wrapping HTML Elements
			</h3>
			<CustomButton variant='primary' onClick={() => console.log("clicked")}>
				Primary Button
			</CustomButton>

			<h3 className='videoTopic'>
				<hr />
				Extracting a Components Prop Types
			</h3>
			<CustomComponent
				name='Ivanka o Lopes'
				isLoggedIn={true}
			></CustomComponent>
		</>
	);
}

export default App;
