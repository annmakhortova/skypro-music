import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const authData = localStorage.getItem("authData");
  if (authData === null) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
