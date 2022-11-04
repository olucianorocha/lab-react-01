import React from "react";
import { Dashboard } from "../pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const RouteSet = () => {

    return (
        < BrowserRouter >
            <Routes>
                <Route path="/home" element={<Dashboard />} />
                <Route path="*" element={<Navigate to="/home" />} /> */
            </Routes>
        </BrowserRouter >
    );
}