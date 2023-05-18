import { useEffect, useRef } from "react";

export const DomRef = () => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		/* `inputRef.current.focus();` is setting the focus on the input element referenced by `inputRef`.
    This means that the input element will be highlighted and ready to receive user input without the
    user having to click on it first. */
		inputRef.current?.focus();
	}, []);

	return (
		<div>
			<input type='text' ref={inputRef} />
		</div>
	);
};

export default DomRef;
