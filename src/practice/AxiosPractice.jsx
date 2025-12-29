import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosPractice = () => {
  const [users, setUsers] = useState([]);

  function FetchUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }

  useEffect(() => {
    FetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Users List</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold text-gray-900">
              {user.username}
            </h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-500">{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosPractice;
