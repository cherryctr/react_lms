// src/Router.js
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

// Lazy load components
const Home = lazy(() => import("./views/home/HomePage"));
const Login = lazy(() => import("./views/login/LoginPage"));
const Register = lazy(() => import("./views/register/RegisterPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
