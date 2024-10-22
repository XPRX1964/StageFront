// PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  const role = localStorage.getItem("role");

  if (!isAuthenticated || role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children; // Render children if authenticated and role is admin
};

export default PrivateRoute;
