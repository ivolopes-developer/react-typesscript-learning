type StatusProps = {
	status: "loading" | "Success" | "Error";
};

export const Status = (props: StatusProps) => {
	let message;

	if (props.status === "loading") {
		message = "leading...";
	} else if (props.status === "Success") {
		message = "Data fetched successfully!";
	} else if (props.status === "Error") {
		message = "Error fetching data";
	}

	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	);
};
