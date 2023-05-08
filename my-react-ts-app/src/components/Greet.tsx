type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	return (
		<div>
			{props.isLoggedIn === true ? (
				<h2>
					Welcome {props.name}, you have {props.messageCount} unread messages
				</h2>
			) : (
				<h2>please, login</h2>
			)}
		</div>
	);
};
