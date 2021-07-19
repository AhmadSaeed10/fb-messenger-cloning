import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBP536ITEnSccZMQxEF7dqyRkuaqu52N6s",
  authDomain: "fb-messenger-cloning.firebaseapp.com",
  databaseURL: "https://fb-messenger-cloning.firebaseio.com",
  projectId: "fb-messenger-cloning",
  storageBucket: "fb-messenger-cloning.appspot.com",
  messagingSenderId: "678057688021",
  appId: "1:678057688021:web:bf986f5a5b7a87f1ae9b5c",
  measurementId: "G-55F055HDMP",
});

const db = firebaseApp.firestore();

export default db;
