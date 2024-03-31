import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getAppointments = async () => {
      const querySnapshot = await getDocs(collection(db, "form"));
      const appointmentList = [];
      querySnapshot.forEach((doc) => {
        appointmentList.push({ id: doc.id, ...doc.data() });
      });
      setAppointments(appointmentList);
    };
    getAppointments();
  }, []);

  const handleLogout = () => {
    // Clear session (if using sessionStorage)
    sessionStorage.removeItem("isLoggedIn");

    // Redirect to admin login
    window.location.href = "/admin";
  };

  // Group appointments by date
  const groupedAppointments = {};
  appointments.forEach((appointment) => {
    if (!groupedAppointments[appointment.appointmentDate]) {
      groupedAppointments[appointment.appointmentDate] = [];
    }
    groupedAppointments[appointment.appointmentDate].push(appointment);
  });

  // Filter appointments based on search query
  const filteredAppointments = appointments.filter((appointment) =>
    appointment.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="rounded-lg shadow-md p-8 bg-white w-full max-w-screen-xl overflow-x-auto">
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
          <input
            type="text"
            placeholder="Search by name..."
            className="border px-4 py-2 mb-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <h2 className="text-xl font-semibold">Bookings Appointment History</h2>
          {Object.keys(groupedAppointments).map((date) => (
            <div key={date}>
              <h3 className="text-lg font-semibold mt-4">{date}</h3>
              <table className="w-full mt-2">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Date</th>
                    <th className="px-4 py-2">Time</th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Phone</th>
                    <th className="px-4 py-2">Service</th>
                    <th className="px-4 py-2">Truck</th>
                    <th className="px-4 py-2">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="border px-4 py-2">{appointment.appointmentDate}</td>
                      <td className="border px-4 py-2">{appointment.appointmentTime}</td>
                      <td className="border px-4 py-2">{appointment.name}</td>
                      <td className="border px-4 py-2">{appointment.email}</td>
                      <td className="border px-4 py-2">{appointment.phone}</td>
                      <td className="border px-4 py-2">{appointment.service}</td>
                      <td className="border px-4 py-2">{appointment.truck}</td>
                      <td className="border px-4 py-2">{appointment.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
