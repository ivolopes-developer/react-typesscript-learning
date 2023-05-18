import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
	const [timer, setTimer] = useState(0);
	const interValRef = useRef<number | null>(null);

	const stopTimer = () => {
		if (interValRef.current) {
			window.clearInterval(interValRef.current);
		}
	};

	useEffect(() => {
		/* This code is setting up an interval using `setInterval` that increments the `timer` state by 1
    every second (1000 milliseconds). The interval ID is stored in the `interValRef.current` mutable
    ref. The `useEffect` hook is used to set up the interval when the component mounts, and return a
    cleanup function that stops the interval when the component unmounts. The `stopTimer` function is
    called when the "Stop" button is clicked, which clears the interval using `clearInterval`. */
		interValRef.current = window.setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => {
			stopTimer();
		};
	}, []);

	return (
		<div>
			HookTimer - {timer} - <button onClick={() => stopTimer()}>Stop</button>
		</div>
	);
};
