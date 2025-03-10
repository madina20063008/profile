import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/login");
      return;
    }
    setUser(storedUser);
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700">
            {user.name.charAt(0)}
          </div>
          <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
        <div className="mt-4 text-left">
          <p><strong>Email:</strong> {user.email}</p>
         
        </div>
        <button 
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/login");
          }}
          className="w-full mt-6 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;