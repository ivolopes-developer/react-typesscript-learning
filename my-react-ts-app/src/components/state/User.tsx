import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

export const UserState = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			name: "John Doe",
			email: "upchh@example.com",
		});
	};

	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div>
			<h4>Hello {user?.name}</h4>
			<h5>{user?.email}</h5>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	);
};
