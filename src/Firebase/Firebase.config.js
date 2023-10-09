// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADt3r-6wROeqsKDuJ2hSoYm-37nfpZZI8",
  authDomain: "assignment-08-wedding.firebaseapp.com",
  projectId: "assignment-08-wedding",
  storageBucket: "assignment-08-wedding.appspot.com",
  messagingSenderId: "25834234918",
  appId: "1:25834234918:web:4700e02d762b930710f2e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};