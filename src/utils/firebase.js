

import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRynycREvHWuHrax6DS_9W4Nn_VxuEir0",
  authDomain: "netflixkalash-d1896.firebaseapp.com",
  projectId: "netflixkalash-d1896",
  storageBucket: "netflixkalash-d1896.firebasestorage.app",
  messagingSenderId: "824126145616",
  appId: "1:824126145616:web:e4321d804ffbb916d8fd55",
  measurementId: "G-HDGLZFTXHX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();