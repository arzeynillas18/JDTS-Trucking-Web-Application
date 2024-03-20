import React from "react";

const AdminDashboard = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="rounded-lg shadow-md p-8 bg-white w-full max-w-xl">
        <h1 className="text-3xl font-semibold mb-6">Welcome, Admin!</h1>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <ul className="mt-2">
            <li>Logged in at 10:00 AM</li>
            <li>Updated user settings</li>
            <li>Viewed analytics report</li>
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Tasks</h2>
          <ul className="mt-2">
            <li>Review user feedback</li>
            <li>Complete monthly report</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
