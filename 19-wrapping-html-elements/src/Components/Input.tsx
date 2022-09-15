import React from "react";

type InputProps = React.ComponentProps<"input">;

const Input = (props: InputProps) => {
	return <input {...props} />;
};

export default Input;
