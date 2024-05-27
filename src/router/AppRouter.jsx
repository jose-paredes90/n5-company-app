import { Navigate, Route, Routes } from "react-router-dom";
import { PermissionsRoutes } from "../pages/permissions/routes/PermissionsRoutes";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/permissions/*" element={<PermissionsRoutes /> } />
            <Route path="/*" element={ <Navigate to="/permissions" /> } />
        </Routes>
    );
}