// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore}from "@firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbCc8E7EYmwVOG5R8QlWJ4l83gRSOQjEU",
  authDomain: "crud-66d87.firebaseapp.com",
  projectId: "crud-66d87",
  storageBucket: "crud-66d87.appspot.com",
  messagingSenderId: "818388874409",
  appId: "1:818388874409:web:daabb5738b5e9ba13c25b8",
  measurementId: "G-P3YF34VHFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app); // populating db with all firebase info
// this will be used for querying in the react code