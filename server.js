import axios from 'axios';
import cors from 'cors';
import express from 'express';
import firebase from './src/firebaseConfig.js';

import { createServer } from 'vite';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dirname } from 'path';
import { doc, getDoc } from 'firebase/firestore';
import { fileURLToPath, pathToFileURL } from 'url';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { env } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`The server is running on port ${port}.`);
});

// If env is production, serve static files from dist folder, else create a vite server

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  app.get('/', async (req, res) => {
    const viteServer = await createServer();
    const url = viteServer.url;

    res.redirect(url);
  });
}

// Handle signals

process.on('SIGINT', () => {
  console.log('Closing the server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('Closing server...');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});

// App Functions
let signedIn;

// Auth Functions
// Sign the user up
app.post('/auth/signup', (req, res) => {
  const auth = getAuth();
  const { email, password, username } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    signedIn = true;
    res.status(200).json({ message: 'User signed up successfully', user });
  })
  .catch((error) => {
    signedIn = false;
    res.status(500).json({ message: 'Error signing up user', error });
  });
});

// Log the user in
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    if (user) {
      signedIn = true;
      res.status(200).json({ message: 'User logged in successfully', user });
    } else {
      signedIn = false;
      res.status(500).json({ message: 'Error logging in user', error });
    }
  })
  .catch((error) => {
    signedIn = false;
    res.status(500).json({ message: 'Error logging in user', error });
  });
});

// Check if the user is authenticated
app.get('/auth/status', (req, res) => {
  const auth = getAuth();
  const user = auth.currentUser;
  if (user) {
    res.send(true); // User is authenticated
  } else {
    res.send(false); // User is not authenticated
  }
});

// Log the user out
app.get('/auth/logout', (req, res) => {
  const auth = getAuth();
  signOut(auth)
  .then(() => {
    res.status(200).json({ message: 'User logged out successfully' });
  })
  .catch((error) => {
    res.status(500).json({ message: 'Error logging out user', error });
  });
});
