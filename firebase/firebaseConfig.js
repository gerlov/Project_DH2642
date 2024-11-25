// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdy-ng-oUq0ytSS-XWYEt4HEXhOusE83s",
  authDomain: "physioai-156f4.firebaseapp.com",
  databaseURL: "https://physioai-156f4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "physioai-156f4",
  storageBucket: "physioai-156f4.firebasestorage.app",
  messagingSenderId: "1032058737008",
  appId: "1:1032058737008:web:5b35a16d0cc23e181cbfb5",
  measurementId: "G-C7SCPJFZTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {firebaseConfig}