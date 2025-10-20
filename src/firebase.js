// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDr5UnIzSwjYWwYmh53CqfwQof9RBVMDmM",
  authDomain: "flowchat-d68a3.firebaseapp.com",
  projectId: "flowchat-d68a3",
  storageBucket: "flowchat-d68a3.firebasestorage.app",
  messagingSenderId: "634520121209",
  appId: "1:634520121209:web:bf9efab2a4b20661f1c9a8",
  measurementId: "G-XXKC5LRELS"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);   // Firestore instance

export { app, analytics, db };
