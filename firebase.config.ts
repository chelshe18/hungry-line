import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBNJLxn0i6UwQ8scx0esicyuJLuGonQtIY",
  authDomain: "hungry-line.firebaseapp.com",
  projectId: "hungry-line",
  storageBucket: "hungry-line.appspot.com",
  messagingSenderId: "318517297746",
  appId: "1:318517297746:web:ae13c7bec174216d59d58b",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const storage = getStorage(FIREBASE_APP);
export const db = getFirestore(FIREBASE_APP);
