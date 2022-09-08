import React from "react";
import { PersonListProps } from "../Types/Person.types";

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name) => {
        return (
          <h2>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
