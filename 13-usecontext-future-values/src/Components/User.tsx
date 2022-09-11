import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const User = () => {
	const userCtx = useContext(UserContext);

	const handleLogin = () => {
		userCtx.setUser({
			name: "John Doe",
			email: "john@example.com",
		});
	};
	const handleLogout = () => {
		userCtx.setUser(null);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<p>User Name Is {userCtx.user?.name}</p>
			<p>User Email Is {userCtx.user?.email}</p>
		</div>
	);
};

export default User;
