// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     name: "",
//     username: "",
//     password: ""
//   });
//   const [error, setError] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/users");
//         setUsers(response.data);
//         console.log("Fetched users:", response.data);
//       } catch (err) {
//         console.error("Error fetching users:", err);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
    
//     // Check for existing user
//     const existingUser = users.find(
//       (user) =>
//         user.email === formData.email ||
//         user.name === formData.name ||
//         user.username === formData.username
//     );
    
//     if (existingUser) {
//       if (existingUser.email === formData.email) {
//         setError("A user with this email already exists.");
//       } else if (existingUser.name === formData.name) {
//         setError("A user with this name already exists.");
//       } else if (existingUser.username === formData.username) {
//         setError("A user with this username already exists.");
//       }
//       return;
//     }

//     try {
//       const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
//       localStorage.setItem("user", JSON.stringify(response.data));
//       alert("Registration successful!");
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-center mb-2">Register</h2>
//         {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input 
//             type="text" 
//             name="name" 
//             placeholder="Name" 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
//           />
//           <input 
//             type="text" 
//             name="username" 
//             placeholder="Username" 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
//           />
//           <input 
//             type="email" 
//             name="email" 
//             placeholder="Email" 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
//           />
//           <input 
//             type="password" 
//             name="password" 
//             placeholder="Password" 
//             onChange={handleChange} 
//             required 
//             className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
//           />
//           <button 
//             type="submit" 
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        console.log("Fetched users:", response.data);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    const existingUser = users.find(
      (user) =>
        user.email === formData.email ||
        user.name === formData.name ||
        user.username === formData.username
    );
    
    if (existingUser) {
      if (existingUser.email === formData.email) {
        setError("A user with this email already exists.");
      } else if (existingUser.name === formData.name) {
        setError("A user with this name already exists.");
      } else if (existingUser.username === formData.username) {
        setError("A user with this username already exists.");
      }
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", formData);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-2">Register</h2>
        {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
          <input 
            type="text" 
            name="username" 
            placeholder="Username" 
            onChange={handleChange} 
            required 
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" 
          />
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
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have an account? <NavLink to="/login" className="text-blue-500 hover:underline">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;