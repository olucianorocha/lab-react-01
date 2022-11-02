import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const RouteSet = () => {

    return (
        < BrowserRouter >
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Dashboard />} />

                <Route path="*" element={<Navigate to="/home" />} /> */
            </Routes>
        </BrowserRouter >
    );
}