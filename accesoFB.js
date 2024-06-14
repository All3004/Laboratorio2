// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7aZACYscDaehzmY4DZ4KnuitDVupdbsQ",
  authDomain: "appfruit-a0e67.firebaseapp.com",
  projectId: "appfruit-a0e67",
  storageBucket: "appfruit-a0e67.appspot.com",
  messagingSenderId: "840113123800",
  appId: "1:840113123800:web:096d406b12b707b3ecc2ad",
  measurementId: "G-238XMS8G77"
};

if (!accesoFB.apps.length) {
    accesoFB.initializeApp(firebaseConfig);
  }
  
  const db = accesoFB.firestore();
  const auth = accesoFB.auth();
  
  export { accesoFB, db, auth };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);