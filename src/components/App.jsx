import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";

import "./App.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token" || null));
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Hi there!</h1>} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
