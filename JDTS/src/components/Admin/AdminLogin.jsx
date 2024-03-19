import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminLogin = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const testUsername = "admin";
    const testPassword = "admin";

    if (username === testUsername && password === testPassword) {
      setIsLoggedIn(true);
      history.push("/admin-dashboard"); // Redirect to admin dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="h-screen flex bg-gray-100">
      <div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
        {!isLoggedIn ? (
          <div className="text-primary m-6">
            <div className="flex items-center mt-3 justify-center">
              <h1 className="text-2xl font-medium text-primary mt-4 mb-2">
                Admin
              </h1>
            </div>
            <form>
              <label className="text-left">Username:</label>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <label>Password:</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={
                  "w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                }
              />
              <div className="flex items-center mt-3 justify-center">
                <button
                  className={
                    "bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
                  }
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default AdminLogin;
