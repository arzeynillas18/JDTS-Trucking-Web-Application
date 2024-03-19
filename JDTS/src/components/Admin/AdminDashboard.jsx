import React from "react";
import { useHistory } from "react-router-dom";

const AdminDashboard = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Perform logout actions, e.g., clear session, redirect to login page
    history.push("/admin-login"); // Redirect to login page after logout
  };

  return (
    <div className="h-screen flex bg-gray-100 justify-center items-center">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
        <p>Welcome to the admin dashboard!</p>
        <button
          className="bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md px-4 py-2 mt-4"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
