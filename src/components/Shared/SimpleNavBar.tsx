import { LogOut } from "lucide-react";

export const SimpleNavBar = () => {
	return (
		<nav className="flex items-center justify-between gap-4 bg-ga-black-default px-8 py-3 shadow-xl max-sm:p-3">
			<div className="flex items-center gap-2 font-semibold">
				<a href="/" className="flex items-center">
					Pygmalion<span className="text-ga-purple-lighter">AI</span>
				</a>
			</div>
			<div className="flex gap-4">
				<a
					aria-label="Back"
					href="/"
					className="focusable-icon-button relative rounded p-1"
				>
					<LogOut />
				</a>
			</div>
		</nav>
	);
};
