import { useState } from "react";

export const TextInput = (props: {
	fieldName: string;
	label?: string;
	helperText?: string;
	placeholder?: string;
	isMultiline?: boolean;
	type: string;
	required: boolean;
	setInputFn?: (value: string) => void;
}) => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: any) => {
		if (props.setInputFn) props.setInputFn(e.target.value);

		setInputValue(e.target.value);
	};

	const renderedPlaceholder =
		props.placeholder !== undefined
			? props.placeholder
			: "Type something here...";

	return (
		<div>
			{props.label && (
				<label htmlFor={props.fieldName}>
					<div className={props.helperText ? "" : "pb-1"}>{props.label}</div>
					{props.helperText && (
						<p className="mt-[-0.125rem] pb-1 text-sm text-ga-white-darker">
							{props.helperText}
						</p>
					)}
				</label>
			)}
			{!props.isMultiline ? (
				<input
					id={props.fieldName}
					name={props.fieldName}
					type={props.type || "text"}
					required={props.required}
					placeholder={renderedPlaceholder}
					className="focusable-field w-full rounded-xl px-4 py-2"
					value={inputValue}
					onChange={handleChange}
				/>
			) : (
				<textarea
					id={props.fieldName}
					name={props.fieldName}
					required={props.required}
					placeholder={renderedPlaceholder}
					className="focusable-field w-full rounded-xl px-4 py-2 !text-ga-white-default"
					value={inputValue}
					onChange={handleChange}
					style={{ height: "auto" }}
					rows={1}
					onInput={(e) => {
						// TODO figure out how to make this work with tailwind
						const ele = e.target;
						// @ts-ignore
						ele.style.height = "";
						// @ts-ignore
						ele.style.height = `${ele.scrollHeight}px`;
					}}
				/>
			)}
		</div>
	);
};
