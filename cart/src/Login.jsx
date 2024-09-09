import React, { useState } from "react";

import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, password);
  };

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>Login</span>
      {showLogin && (
        <form
          onSubmit={handleLogin}
          className="absolute p-5 border-4 border-blue-800 bg-white rounded-xl text-black"
          style={{
            width: 300,
            top: "2rem",
            left: -250,
          }}
        >
          <input
            required
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            required
            placeholder="password"
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full mt-3"
          />
          <button type="submit" className="bg-green-900 text-white py-2 px-5 rounded-md text-sm mt-5" id="loginbtn">
            Login
          </button>
        </form>
      )}
    </>
  );
}
