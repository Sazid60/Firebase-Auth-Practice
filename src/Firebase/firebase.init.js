// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6XMNJG-1hjF63PNBvPm96eY7fNM55-2s",
  authDomain: "fir-auth-practice-c1ceb.firebaseapp.com",
  projectId: "fir-auth-practice-c1ceb",
  storageBucket: "fir-auth-practice-c1ceb.appspot.com",
  messagingSenderId: "636589970965",
  appId: "1:636589970965:web:2ccd4d49f479b50781601c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

