
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      alert("Login successful from local storage!");
      navigate("/profile");
      return;
    }

    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      const user = response.data.find((u) => u.email === formData.email);

      if (!user) {
        setError("No such user exists.");
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      alert("Login successful!");
      navigate("/profile");
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-2">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don't have an account? <NavLink to="/register" className="text-blue-500 hover:underline">Register</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
