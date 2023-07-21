import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: 'KEY',
  authDomain: 'DOMAIN',
  projectId: 'ID',
};

firebase.initializeApp(firebaseConfig);

export default firebase;