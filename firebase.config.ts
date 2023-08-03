import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNJLxn0i6UwQ8scx0esicyuJLuGonQtIY",
  authDomain: "hungry-line.firebaseapp.com",
  projectId: "hungry-line",
  storageBucket: "hungry-line.appspot.com",
  messagingSenderId: "318517297746",
  appId: "1:318517297746:web:ae13c7bec174216d59d58b",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
