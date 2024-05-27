import { Navigate, Route, Routes } from "react-router-dom";
import { PermissionPage } from "../pages/PermissionPage";

export const PermissionsRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <PermissionPage /> } />
            <Route path="/*" element={ <Navigate to="/" /> } />
        </Routes>
    );
}