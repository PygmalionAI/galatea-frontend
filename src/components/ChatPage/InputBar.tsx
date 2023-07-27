import { Send, Sliders } from "lucide-react";

/** Meant to be used exclusively within the InputBar. */
const IconButton = (props: { children: React.ReactNode }) => (
	<button
		type="button"
		className="focusable-icon-button focusable-field border-2 border-transparent px-1 py-3"
	>
		{props.children}
	</button>
);

/** Bar containing the message text input and some attached buttons. */
const InputBar = () => (
	<div className="flex w-full justify-center pb-4">
		<input
			type="text"
			placeholder="Send a message..."
			className="focusable-field w-full rounded-l-xl px-4 py-2"
		/>
		<IconButton>
			<Sliders size={20} />
		</IconButton>
		<IconButton>
			<Send size={20} />
		</IconButton>
		<div className="rounded-r-xl bg-ga-white-default/5 pr-2" />
	</div>
);

export default InputBar;
