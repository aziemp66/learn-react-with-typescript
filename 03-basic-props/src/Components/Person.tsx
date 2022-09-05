import React from "react";

type NameProps = {
  name: {
    first: string;
    last: string;
  };
};
const Person = ({ name }: NameProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
