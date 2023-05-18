import { createContext, useState } from "react";

export type AuthUser = {
	name: string;
	email: string;
};

type UserContextProviderProps = {
	children: React.ReactNode;
};

/**
 * The type defines the shape of a context object for managing user authentication in a TypeScript
 * React application.
 * @property {AuthUser | null} user - This property is of type `AuthUser` or `null` and represents the
 * currently authenticated user in the application. If there is no authenticated user, it will be
 * `null`.
 * @property setUser - `setUser` is a function that takes an argument of type
 * `React.SetStateAction<AuthUser | null>` and updates the `user` property of the `UserContextType`
 * accordingly. It is used to set the currently authenticated user in the context.
 */
type UserContextType = {
	user: AuthUser | null;
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<AuthUser | null>(null);
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
};
