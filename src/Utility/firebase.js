// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVWZ6n2ntqMd5HHeROJYc9gu5oCv6kOyo",
  authDomain: "clone-8c897.firebaseapp.com",
  projectId: "clone-8c897",
  storageBucket: "clone-8c897.firebasestorage.app",
  messagingSenderId: "139702222161",
  appId: "1:139702222161:web:23b4b4ea13cbc531152770",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

