import React from "react";

type TextOwnProps<E extends React.ElementType> = {
	size?: "sm" | "md" | "lg";
	color?: "primary" | "secondary" | "tertiary";
	children: React.ReactNode;
	as?: E;
};

type TextProps<E extends React.ElementType> = TextOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

const Text = <E extends React.ElementType = "div">({
	size,
	color,
	children,
	as,
}: TextProps<E>) => {
	const Components = as || "div";
	return (
		<Components className={`class-with-${size}-${color}`}>
			{children}
		</Components>
	);
};

export default Text;
