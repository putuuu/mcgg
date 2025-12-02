// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBju8kwiVYdLqPpkBXYEZb2Uq9TgQ-sP5w",
  authDomain: "mcggdata.firebaseapp.com",
  databaseURL:
    "https://mcggdata-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mcggdata",
  storageBucket: "mcggdata.firebasestorage.app",
  messagingSenderId: "1056025336868",
  appId: "1:1056025336868:web:eef1dee5f5c29172970cb1",
  measurementId: "G-NW5BPLPPXV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const rtdb = getDatabase(app);
