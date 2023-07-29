import { useState } from "react";
import { Link } from "react-router-dom";

import { close, menu, pygchiselsvg } from "../../../assets";

export const LandingNavBar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`px-custom fixed top-0 z-20 flex w-full items-center justify-between py-5 backdrop-blur-2xl`}
		>
			<div className="flex items-center">
				<img
					src={pygchiselsvg}
					alt="chisel"
					className="h-9 w-9 object-contain"
				/>
				<p className="text-[18px] font-bold text-ga-white-default">
					PygmalionAI
				</p>
			</div>
			<div>
				<ul className="hidden list-none flex-row gap-10 md:flex">
					<li>
						<a
							href="https://discord.gg/pygmalionai"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation2"
						>
							Discord
						</a>
					</li>
					<li>
						<a
							href="https://docs.pygmalion.chat"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation"
						>
							Docs
						</a>
					</li>
					<li>
						<a
							href="https://huggingface.co/PygmalionAI"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation"
						>
							HuggingFace
						</a>
					</li>
					<li>
						<a
							href="https://github.com/PygmalionAI"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation"
						>
							GitHub
						</a>
					</li>
				</ul>
			</div>
			<div className="hidden md:flex">
				<button className="pink-gradient-background scale-10 mr-3 h-10 rounded-full px-5 text-ga-white-default">
					<Link to={"/login"}>Login</Link>
				</button>
				<button className="text-ga-white-default">
					<Link to={"/register"}>Sign Up</Link>
				</button>
			</div>
			<div className="flex flex-1 items-center justify-end md:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="h-[28px] w-[28px] cursor-pointer object-contain"
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} landing-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
				>
					<ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
						<li>
							<a
								href="https://discord.gg/pygmalionai"
								target="_blank"
								rel="noopener noreferrer"
							>
								Discord
							</a>
						</li>
						<li>
							<a
								href="https://docs.pygmalion.chat"
								target="_blank"
								rel="noopener noreferrer"
							>
								Docs
							</a>
						</li>
						<li>
							<a
								href="https://huggingface.co/PygmalionAI"
								target="_blank"
								rel="noopener noreferrer"
							>
								HuggingFace
							</a>
						</li>
						<li>
							<a
								href="https://github.com/PygmalionAI"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
						<li>
							<a href="/register">Register</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
