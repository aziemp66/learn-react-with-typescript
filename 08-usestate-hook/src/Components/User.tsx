import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const handleLogin = () => {
    setUser({ name: "Azie", email: "aziemp66@gmail.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogout}>Log Out</button>
      <p>{`User name is ${user?.name} & his email is ${user?.email}`}</p>
    </div>
  );
};

export default User;
