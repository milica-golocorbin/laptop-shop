import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext, UserCtxProps } from "../global/context/user-context";
// PAGES
import HomePage from "./home-page";
import NotFoundPage from "./not-found-page";
import CreateAccountPage from "../auth/create-account-page";
import CreateAccountCompletePage from "../auth/create-account-complete-page";
import LoginPage from "../auth/login-page";
import ForgotPasswordPage from "../auth/forgot-password-page";
// END OF IMPORTS

const AppRoutes = () => {
  const { user } = useContext(UserContext) as UserCtxProps;
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* auth routes start */}
      <Route
        path="/auth/login"
        element={!!user.data ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/auth/create-account"
        element={
          !!user.data ? <Navigate to="/" replace /> : <CreateAccountPage />
        }
      />
      <Route
        path="/auth/create-account/complete"
        element={
          !!user.data ? (
            <Navigate to="/" replace />
          ) : (
            <CreateAccountCompletePage />
          )
        }
      />
      <Route
        path="/auth/forgot-password"
        element={
          !!user.data ? <Navigate to="/" replace /> : <ForgotPasswordPage />
        }
      />
      {/* auth routes end */}

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
