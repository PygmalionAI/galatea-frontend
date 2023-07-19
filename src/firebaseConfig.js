import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
