import { Speaker } from "./Speaker";

export interface Message {
	speaker: Speaker;
	utterance: string;
	timestamp: Date;
}
