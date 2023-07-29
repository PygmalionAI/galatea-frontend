import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="flex flex-col gap-8 bg-ga-black-default px-8 py-6 shadow-xl max-sm:p-3">
			{/* top row */}
			<div className="flex flex-col justify-between gap-8 md:flex-row">
				{/* logo and about */}
				<div className="flex flex-col gap-2">
					<Link to="/" className="w-fit">
						Pygmalion<span className="text-ga-purple-default">AI</span>
					</Link>
					<p className="max-w-md text-sm font-light">
						An open-source project dedicated to creating large language models
						for chat and role-play purposes.
					</p>
				</div>

				{/* grid */}
				<div className="grid grid-cols-2 gap-8 text-sm md:px-12">
					{/* project list */}
					<ul className="flex flex-col gap-2">
						<li className="font-bold">Project</li>
						<Link to="/" className="underline-animation w-fit">
							<li>About</li>
						</Link>
						<Link to="/privacy" className="underline-animation w-fit">
							<li>Privacy Policy</li>
						</Link>
						<Link to="/terms" className="underline-animation w-fit">
							<li>Terms of use</li>
						</Link>
					</ul>

					{/* connect list */}
					<ul className="flex flex-col gap-2">
						<li className="font-bold">Connect</li>
						<a
							href="https://discord.gg/pygmalionai"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation w-fit"
						>
							<li>Discord</li>
						</a>
					</ul>
				</div>
			</div>

			{/* bottom row */}
			<div className="flex items-center justify-between gap-4">
				<small className="text-xs font-light italic">
					Copyright 2023 - PygmalionAI Project. All rights reserved.
				</small>

				<small
					className="cursor-pointer rounded-xl p-1 text-xs font-thin italic text-ga-purple-default transition-colors hover:bg-ga-purple-default hover:text-ga-black-lightest"
					onClick={handleScrollToTop}
				>
					<ArrowUp />
				</small>
			</div>
		</div>
	);
};
