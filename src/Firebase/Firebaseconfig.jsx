// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// here add 
// import {getAuth} from 'firebase/app'
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUfgZnBTDjGPFGiOa9a5urHfOzRwr9xgI",
  authDomain: "ecommerce-1e312.firebaseapp.com",
  projectId: "ecommerce-1e312",
  storageBucket: "ecommerce-1e312.firebasestorage.app",
  messagingSenderId: "736433314189",
  appId: "1:736433314189:web:27670f53a251dfbfd285c4",
  measurementId: "G-HDPLJX1RKK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

// here get data from save one vairable

export const auth =getAuth(app);

