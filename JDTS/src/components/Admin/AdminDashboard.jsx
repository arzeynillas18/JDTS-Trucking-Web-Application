import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const handleLogout = () => {
    // Clear session (if using sessionStorage)
    sessionStorage.removeItem("isLoggedIn");

    // Redirect to admin login
    window.location.href = "/admin";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="rounded-lg shadow-md p-8 bg-white w-full max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">Welcome, Admin!</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Bookings Appointment History</h2>
          <ul className="mt-2">
            <li>Booked appointment at 10:00 AM</li>
            <li>Updated appointment settings</li>
            <li>Viewed appointment analytics report</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <ul className="mt-2">
            <li>Review user feedback</li>
            <li>Complete monthly report</li>
          </ul>
        </div>
        <div className="mt-6">
          {/* Use Link to navigate to "/admin" route */}
          <Link to="/admin" className="text-blue-500 hover:underline">Go to Admin Login</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
