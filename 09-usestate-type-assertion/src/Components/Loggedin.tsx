import { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>User is Logged {isLoggedIn ? "In" : "Out"}</p>
    </div>
  );
};

export default Loggedin;
