import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const token = true;
    return token ? <Outlet /> : <Navigate to  = "/" />
}