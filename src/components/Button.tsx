import { twJoin } from "tailwind-merge";

export const Button = (props: {
	schema: "primary" | "secondary";
	type: "button" | "submit";
	disabled?: boolean;
	children: React.ReactNode;
	classes?: string;
}) => (
	<button
		type={props.type}
		// makes conditional classes easier to read and write
		className={twJoin(
			"flex items-center justify-center gap-1 rounded-md px-3 py-2 transition-colors duration-100",
			props.schema == "primary" &&
				"bg-ga-purple-darker enabled:hover:bg-ga-purple-default enabled:active:bg-ga-purple-lighter disabled:cursor-not-allowed disabled:bg-ga-purple-darkest disabled:text-ga-gray-lighter",
			props.schema == "secondary" &&
				"bg-ga-gray-default hover:bg-ga-gray-lighter active:bg-ga-gray-lightest",
			props.classes,
		)}
		disabled={props.disabled}
	>
		{props.children}
	</button>
);
