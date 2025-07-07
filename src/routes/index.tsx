import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import DashboardPage from "../pages/Dashboard";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
