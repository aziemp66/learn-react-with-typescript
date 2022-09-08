import React from "react";
import { PersonProps } from "../Types/Person.types";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
