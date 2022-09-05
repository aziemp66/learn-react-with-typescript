import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
};

const Greet = ({ name, messageCount }: GreetProps) => {
  return (
    <div>
      <h2>
        Welcome {name}! You have {messageCount} unread messages
      </h2>
    </div>
  );
};

export default Greet;
