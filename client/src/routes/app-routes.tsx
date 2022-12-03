import { Routes, Route } from "react-router-dom";
import HomePage from "./home-page";
import CreateAccountPage from "../auth/create-account-page";
import LoginPage from "../auth/login-page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/auth/create-account" element={<CreateAccountPage />} />
    </Routes>
  );
};

export default AppRoutes;
