import React from "react";

const Sidebar = ({ onSelect }) => {
  return (
    <div className="w-1/4 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg font-bold">Admin Dashboard</h2>
      <button
        onClick={() => onSelect("products")}
        className="w-full text-left py-2 px-4 hover:bg-gray-700"
      >
        Manage Products
      </button>
      <button
        onClick={() => onSelect("users")}
        className="w-full text-left py-2 px-4 hover:bg-gray-700"
      >
        Manage Users
      </button>
    </div>
  );
};

export default Sidebar;
