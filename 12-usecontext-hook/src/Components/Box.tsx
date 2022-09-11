import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Box = () => {
	const theme = useContext(ThemeContext);

	return (
		<div
			style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
		>
			Theme Context
		</div>
	);
};

export default Box;
