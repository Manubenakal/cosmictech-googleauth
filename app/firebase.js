// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4f0zpHNHF2Tlojmo8cGcmjaRyQMc5pw",
  authDomain: "auth-project-cfa24.firebaseapp.com",
  projectId: "auth-project-cfa24",
  storageBucket: "auth-project-cfa24.appspot.com",
  messagingSenderId: "948936437775",
  appId: "1:948936437775:web:58ab5a77a2c7cacc26737a",
  measurementId: "G-KPFD2XKDEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);