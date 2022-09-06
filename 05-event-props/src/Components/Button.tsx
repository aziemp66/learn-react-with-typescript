import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <button
      onClick={(e) => {
        handleClick(e, 1);
      }}
    >
      Button
    </button>
  );
};

export default Button;
