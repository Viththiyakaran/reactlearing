import React, { useEffect, useState } from "react";

const WorkWithApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=100");
      const data = await response.json();
      setUsers(data.results);
    } catch (error) {
      alert("Error fetching users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-50 p-6">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-gray-800">User Directory</h1>
        <button
          onClick={fetchUsers}
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md"
        >
          Reload Users
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading users...</p>
      ) : (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentUsers.map((user, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <img
                  src={user.picture.medium}
                  alt="avatar"
                  className="w-16 h-16 rounded-full border-2 border-blue-600"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-lg">
                    {user.name.first} {user.name.last}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.location.country}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-sm truncate">
                {user.email}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center flex-wrap gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md font-medium transition ${
              currentPage === i + 1
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkWithApi;
