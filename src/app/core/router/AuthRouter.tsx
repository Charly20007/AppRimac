import { Route, Routes, Navigate } from "react-router-dom";
import AuthModule from "./../../modules/auth/AuthModule";
import React from "react";

const AuthRouter = ({ isAuth }: { isAuth: boolean }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={isAuth ? <Navigate to="/dashboard" /> : <AuthModule />}
      />
    </Routes>
  );
};

export default AuthRouter;
