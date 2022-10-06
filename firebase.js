// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAepwlQMiQe-x11cnKQhR3MLnKc6dON1ww",
  authDomain: "callback-cb34d.firebaseapp.com",
  projectId: "callback-cb34d",
  storageBucket: "callback-cb34d.appspot.com",
  messagingSenderId: "832866209965",
  appId: "1:832866209965:web:62c27d52403c9b0e313624"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();
export { auth, db, storage , app};


// here
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAepwlQMiQe-x11cnKQhR3MLnKc6dON1ww",
//   authDomain: "callback-cb34d.firebaseapp.com",
//   projectId: "callback-cb34d",
//   storageBucket: "callback-cb34d.appspot.com",
//   messagingSenderId: "832866209965",
//   appId: "1:832866209965:web:62c27d52403c9b0e313624"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);