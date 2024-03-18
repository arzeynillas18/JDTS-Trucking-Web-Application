// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDescLf3yQEdy-CC0OHTV_ijtMrNPIg2Cw",
  authDomain: "jdts-9f4da.firebaseapp.com",
  databaseURL: "https://jdts-9f4da-default-rtdb.firebaseio.com",
  projectId: "jdts-9f4da",
  storageBucket: "jdts-9f4da.appspot.com",
  messagingSenderId: "880440482962",
  appId: "1:880440482962:web:345ccb4a70741ffe7c1a4b",
  measurementId: "G-0FPF4HHTYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);