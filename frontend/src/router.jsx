import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GeneratePlan from "./pages/GeneratePlan";
import Dashboard from "./pages/Dashboard";
import LoginForm from "./components/Auth/LoginForm";
import RegisterForm from "./components/Auth/RegisterForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/generate", element: <GeneratePlan /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

export default router;
