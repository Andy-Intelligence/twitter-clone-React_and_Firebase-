
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAhHACPAsFveem9RBzJQbqSqkJGJqTgLeM",
    authDomain: "twitter-clone-fd2b4.firebaseapp.com",
    projectId: "twitter-clone-fd2b4",
    storageBucket: "twitter-clone-fd2b4.appspot.com",
    messagingSenderId: "656672808242",
    appId: "1:656672808242:web:f4db60df0ff99a9ba34b2b",
    measurementId: "G-0N6JEKMM9D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  export default db;