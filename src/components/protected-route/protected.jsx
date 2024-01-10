import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../auth";

export const ProtectedRoute = ({ redirectPath = "/signin" }) => {
  const isAllowed = useAuth();
  if (isAllowed.auth === null) {
    return <Navigate to={redirectPath} replace={true} />;
  }
  return <Outlet />;
};
