import React from "react";

type HorizontalPosition = "left" | "right" | "center";
type VerticalPosition = "top" | "bottom" | "center";

type ToastProps = {
	position:
		| Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
		| "center";
};

const Toast = ({ position }: ToastProps) => {
	return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
