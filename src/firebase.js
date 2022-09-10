import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYnO1CNu3MpF3M1S8Yp6AWhHHbAmghyIk",
  authDomain: "actividad-693da.firebaseapp.com",
  projectId: "actividad-693da",
  storageBucket: "actividad-693da.appspot.com",
  messagingSenderId: "968671387999",
  appId: "1:968671387999:web:e633567d1dda954ec696ea",
  measurementId: "G-4359K9E6VW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export { firebase };
