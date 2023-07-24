import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9y6DBYl31nAekXumuuNtZuu8rnc_TVSA',
  authDomain: 'localhost',
  projectId: 'pygmalionai-development'
};

firebase.initializeApp(firebaseConfig);

export default firebase;

