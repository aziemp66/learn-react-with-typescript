import { useState, useRef, useEffect } from "react";

const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null);

	const stopTimer = () => {
		if (interValRef.current) window.clearInterval(interValRef.current);
	};

	useEffect(() => {
		interValRef.current = window.setInterval(() => {
			setTimer((prevTimer) => prevTimer + 1);
		}, 1000);
		return () => {
			stopTimer();
		};
	}, []);

	return (
		<div>
			<h1>Hooktimer - {timer} -</h1>
			<button onClick={() => stopTimer()}>Stop Timer</button>
		</div>
	);
};

export default MutableRef;
