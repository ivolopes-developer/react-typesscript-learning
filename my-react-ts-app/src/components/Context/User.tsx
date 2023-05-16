import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
	const userContext = useContext(UserContext);

	const handleLogin = () => {
		userContext.setUser({
			name: "ivanka",
			email: "ivanka@example.com",
		});
	};
	const handleLogout = () => {
		userContext.setUser(null);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>

			<h5>{userContext.user?.name}</h5>
			<h5>{userContext.user?.email}</h5>
		</div>
	);
};
