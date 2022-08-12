import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9
import { GoogleAuthProvider } from "firebase/auth";
import "firebase/compat/firestore"; //v9
const firebaseConfig = {
  apiKey: "AIzaSyD0wTyr9FnJrBAg8rLJDhz7I-6hIi7Ljso",
  authDomain: "clone-fa228.firebaseapp.com",
  projectId: "clone-fa228",
  storageBucket: "clone-fa228.appspot.com",
  messagingSenderId: "1005242327951",
  appId: "1:1005242327951:web:5949561d57bcc480bee1fa",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
