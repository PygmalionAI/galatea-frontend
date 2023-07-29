import cors from "cors";
import express, { Request, Response } from "express";
import path from "path";

import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import {
	Firestore,
	collection,
	doc,
	getFirestore,
	setDoc,
} from "firebase/firestore";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createServer } from "vite";
import { env, loadEnv } from "./env";

loadEnv();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = env.PORT || 3000;
let server: any;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server = app.listen(port, () => {
	console.log(`The server is running on port ${port}.`);
});

// If env is production, serve static files from dist folder, else create a vite server

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.resolve(__dirname, "dist")));

	app.get("*", (req: Request, res: Response) => {
		res.sendFile(path.resolve(__dirname, "dist", "index.html"));
	});
} else {
	app.get("/", async (req: Request, res: Response) => {
		const viteServer = await createServer();
		// @ts-ignore
		const url = viteServer.url;

		res.redirect(url);
	});
}

// Handle signals

process.on("SIGINT", () => {
	console.log("\nClosing the server...");
	server.close(() => {
		console.log("Server closed.");
		process.exit(0);
	});
});

process.on("SIGTERM", () => {
	console.log("\nClosing server...");
	server.close(() => {
		console.log("Server closed.");
		process.exit(0);
	});
});

// App Functions
let signedIn: boolean;

// Auth Functions
// Sign the user up

app.post("/auth/signup", async (req: Request, res: Response) => {
	const auth = getAuth();
	const { email, password, username } = req.body;

	try {
		// Create the user in Firebase Authentication
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password,
		);
		const user = userCredential.user;

		// Store the username in Firestore
		const db: Firestore = getFirestore();
		const usersCollectionRef = collection(db, "users");
		const userDocRef = doc(usersCollectionRef, user.uid);

		// Use setDoc to add a document with the user's UID and username
		await setDoc(userDocRef, { username, email });

		signedIn = true;
		res.status(200).json({ message: "User signed up successfully", user });
	} catch (error) {
		signedIn = false;
		res.status(500).json({ message: "Error signing up user", error });
	}
});

// Log the user in
app.post("/auth/login", (req: Request, res: Response) => {
	const { email, password } = req.body;
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			if (user) {
				signedIn = true;
				res.status(200).json({ message: "User logged in successfully", user });
			} else {
				signedIn = false;
				res.status(500).json({ message: "Error logging in user", Error });
			}
		})
		.catch((error) => {
			signedIn = false;
			res.status(500).json({ message: "Error logging in user", error });
		});
});

// Check if the user is authenticated
app.get("/auth/status", (req: Request, res: Response) => {
	const auth = getAuth();
	const user = auth.currentUser;
	if (user) {
		res.send(true); // User is authenticated
	} else {
		res.send(false); // User is not authenticated
	}
});

// Log the user out
app.get("/auth/logout", (req: Request, res: Response) => {
	const auth = getAuth();
	signOut(auth)
		.then(() => {
			res.status(200).json({ message: "User logged out successfully" });
		})
		.catch((error) => {
			res.status(500).json({ message: "Error logging out user", error });
		});
});
