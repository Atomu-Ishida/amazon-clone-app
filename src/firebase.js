import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDt2NMBzZX656fjWVl0pr8-7_f4A48a30A',
  authDomain: 'clone-7bfe5.firebaseapp.com',
  projectId: 'clone-7bfe5',
  storageBucket: 'clone-7bfe5.appspot.com',
  messagingSenderId: '378995737733',
  appId: '1:378995737733:web:ef53563358fc1a2f5a95ec',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };
