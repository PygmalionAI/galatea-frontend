import { ThumbsDown, ThumbsUp } from "lucide-react";

/**An individual message.*/
export const Message = (props: {
	speaker: {
		name: string;
		avatarUrl: string;
		isHuman: boolean;
	};
	utterance: string;
	timestamp: Date;
}) => {
	return (
		<span className="flex gap-4">
			<img
				src={props.speaker.avatarUrl}
				className="mt-1 h-12 w-12 rounded-full bg-ga-white-default"
			/>

			<div className="flex select-text flex-col">
				<span>
					<b className="mr-2 text-ga-white-default">{props.speaker.name}</b>
					<span className="text-sm text-ga-white-default/25">
						{new Intl.DateTimeFormat("en-US", {
							dateStyle: "short",
							timeStyle: "short",
						}).format(props.timestamp)}
					</span>
				</span>
				<div className="message-text">
					<div />
					{!props.speaker.isHuman && (
						<div className="mt-3 flex gap-2 text-sm text-ga-white-default/25">
							<ThumbsUp size={16} className="mt-[-0.15rem]" />
							<ThumbsDown size={16} />
						</div>
					)}
				</div>
			</div>
		</span>
	);
};
