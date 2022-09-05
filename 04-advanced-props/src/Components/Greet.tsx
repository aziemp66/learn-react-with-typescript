import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! ${
              messageCount || 0
                ? `You have ${messageCount} unread messages`
                : "No new messages"
            }`
          : "Welcome Guest"}
      </h2>
    </div>
  );
};

export default Greet;
