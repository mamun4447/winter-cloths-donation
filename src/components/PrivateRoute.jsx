import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import Loading from "./Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to={"/login"} />;
};

export default PrivateRoute;
