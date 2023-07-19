import axios from 'axios';
import cors from 'cors';
import express from 'express';
import firebase from './src/firebaseConfig.js';

import { createServer } from 'vite';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dirname } from 'path';
import { doc, getDoc } from 'firebase/firestore';
import { fileURLToPath, pathToFileURL } from 'url';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
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

const auth = getAuth();

// Auth Functions
app.post('/auth/signup', (req, res) => {
  const { email, password, username } = req.body;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    res.status(200).json({ message: 'User signed up successfully', user });
  })
  .catch((error) => {
    res.status(500).json({ message: 'Error signing up user', error });
  });
});