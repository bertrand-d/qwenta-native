import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCraF4duHJYk4DfxbRDIe4dcKrtbDWAXL4",
  authDomain: "qwenta-native.firebaseapp.com",
  projectId: "qwenta-native",
  storageBucket: "qwenta-native.appspot.com",
  messagingSenderId: "506137463668",
  appId: "1:506137463668:web:9e118dd8813eeebded7a21",
  measurementId: "G-22273H4XJ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };