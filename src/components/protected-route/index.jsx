import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({children, redirectPath="/login", isAllowed }) => { //children
    if(!isAllowed) {
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }

    return children
}