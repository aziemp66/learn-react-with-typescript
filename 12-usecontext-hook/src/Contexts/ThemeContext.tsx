import { createContext } from "react";
import Theme from "./Theme";

type ThemeContextProviderProps = {
	children: React.ReactNode;
};

const ThemeContext = createContext(Theme);

export const ThemeContextProvider = ({
	children,
}: ThemeContextProviderProps) => {
	return (
		<ThemeContext.Provider value={Theme}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
