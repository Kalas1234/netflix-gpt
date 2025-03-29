// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSnP-4CicBOzANE7Co0ISMP8BQiMAzqfs",
  authDomain: "netflixgpt-7f53d.firebaseapp.com",
  projectId: "netflixgpt-7f53d",
  storageBucket: "netflixgpt-7f53d.firebasestorage.app",
  messagingSenderId: "491072131322",
  appId: "1:491072131322:web:528441536267b5186a3943",
  measurementId: "G-ETF203RGSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();