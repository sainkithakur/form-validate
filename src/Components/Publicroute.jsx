import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Publicroute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  return !token ? <Outlet /> : <Navigate to="/dasboard" />;
};

export default Publicroute;
