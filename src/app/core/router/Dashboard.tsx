import { Route, Routes, Navigate } from "react-router-dom";
import DashBoardModule from "../../modules/dashboard/DashBoardModule";
import React from "react";

const DashboardRouter = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={isAuth ? <DashBoardModule /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default DashboardRouter;
