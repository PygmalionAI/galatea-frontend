import { NavBar } from "../../components/NavBar";
import { Header } from "./components/Header";
import InputBar from "./components/InputBar";
import { Message } from "./components/Message";
import { mockMessages } from "./components/mockMessage";

export const Chat = () => {
	return (
		<>
			<div className="flex h-screen flex-col bg-ga-black-lighter">
				<div>
					<NavBar />
				</div>

				<div className="min-h-1/4 max-w-1/2 !mx-8 flex h-full flex-col-reverse p-3">
					<InputBar />
					<div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-ga-purple/900 scrollbar flex flex-col-reverse overflow-y-scroll bg-[var(--default)]">
						<div className="flex flex-col gap-6 pb-8 pt-4">
							{mockMessages.map((messageData, index) => (
								<Message key={index} {...messageData} />
							))}
						</div>
						<Header participants={["Emily"]} />
					</div>
				</div>
			</div>
		</>
	);
};
