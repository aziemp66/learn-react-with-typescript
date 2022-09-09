import { useState } from "react";

type UserProps = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);
  const handleLogin = () => {
    setUser({ name: "Azie", email: "aziemp66@gmail.com" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
