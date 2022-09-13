import React from "react";

type RandomNumberType = {
	value: number;
};

type PositiveNumber = RandomNumberType & {
	isPositive: boolean;
	isNegative?: never;
	isZero?: never;
};

type NegativeNumber = RandomNumberType & {
	isNegative: boolean;
	isPositive?: never;
	isZero?: never;
};

type ZeroNumber = RandomNumberType & {
	isZero: boolean;
	isPositive?: never;
	isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | ZeroNumber;

const RandomNumber = ({
	value,
	isPositive,
	isNegative,
	isZero,
}: RandomNumberProps) => {
	return (
		<div>
			{value} {isPositive && "Is Positive"} {isNegative && "Is Negative"}{" "}
			{isZero && "Is Zero"}
		</div>
	);
};

export default RandomNumber;
