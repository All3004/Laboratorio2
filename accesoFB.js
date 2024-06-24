// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6lsB9FKnsmf71sfrT_PoyfxeITiTYahw",
  authDomain: "fruitapp2.firebaseapp.com",
  projectId: "fruitapp2",
  storageBucket: "fruitapp2.appspot.com",
  messagingSenderId: "1009803491050",
  appId: "1:1009803491050:web:057d0f24d98e99d5388993"
};

// Initialize Firebase
const appfirebase = initializeApp(firebaseConfig);

export default appfirebase;