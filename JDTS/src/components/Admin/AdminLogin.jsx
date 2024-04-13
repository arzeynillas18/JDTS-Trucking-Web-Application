import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const testUsername = "admin";
    const testPassword = "admin";

    if (username === testUsername && password === testPassword) {
      setIsLoggedIn(true);
      navigate("/admin-dashboard"); // Redirect to admin dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="w-full max-w-xl m-auto">
        {!isLoggedIn ? (
          <div className="m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-3xl font-medium mt-4 mb-2 text-black"> JDTS Admin</h1>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <form>
                <label className="text-left text-black">Username:</label>
                <input
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="w-full p-3 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
                <label className="text-black">Password:</label>
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full p-3 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                />
                <div className="flex items-center mt-3 justify-center">
                  <button
                    className="bg-blue-700 hover:bg-blue-500 py-3 px-6 text-lg text-white rounded border focus:outline-none"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminLogin;
