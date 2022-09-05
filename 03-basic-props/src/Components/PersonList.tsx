import React from "react";
type PersonProps = {
  first: string;
  last: string;
};
type PropsTypes = {
  names: PersonProps[];
};

const PersonList = ({ names }: PropsTypes) => {
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
