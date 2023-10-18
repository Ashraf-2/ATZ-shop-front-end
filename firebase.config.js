// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdCK0B-sEHPBf1dXcftH_7AOJbVsZe2Cc",
  authDomain: "e-commarce-auth-xm10.firebaseapp.com",
  projectId: "e-commarce-auth-xm10",
  storageBucket: "e-commarce-auth-xm10.appspot.com",
  messagingSenderId: "636089921434",
  appId: "1:636089921434:web:98d59a7a566300b9751423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;