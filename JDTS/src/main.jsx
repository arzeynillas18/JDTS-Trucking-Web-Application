import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./index.css";
import App from "./App";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDescLf3yQEdy-CC0OHTV_ijtMrNPIg2Cw",
  authDomain: "jdts-9f4da.firebaseapp.com",
  projectId: "jdts-9f4da",
  storageBucket: "jdts-9f4da.appspot.com",
  messagingSenderId: "880440482962",
  appId: "1:880440482962:web:345ccb4a70741ffe7c1a4b",
  measurementId: "G-0FPF4HHTYB",
  databaseURL: "https://jdts-9f4da-default-rtdb.firebaseio.com", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>{router}</React.StrictMode>
);
