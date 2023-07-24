import express from "express";
import { env, loadEnv } from "./env";

// import env variables
loadEnv();

// create app
const app = express();

// add middlware to app
app.use(
	// json and url encoding
	express.json(),
	express.urlencoded({ extended: false }),
);

// set server port
const PORT = env.PORT || 3000;

app.get("/", (_, res) => {
	return res.send("Hello World!");
});

// all other routes will return 404
app.all("*", (_, res) => {
	return res.status(404).send("Not Found");
});

// serve app
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}!`);
});
