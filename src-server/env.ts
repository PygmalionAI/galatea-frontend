import { EnvType, load } from "ts-dotenv";

// typed env variables
const schema = {
	PORT: {
		type: Number,
		optional: true,
	},
};

type Env = EnvType<typeof schema>;

export let env: Env;

export function loadEnv() {
	env = load(schema);
}
