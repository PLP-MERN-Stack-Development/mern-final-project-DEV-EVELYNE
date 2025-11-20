import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { PlanProvider } from "./context/PlanContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <PlanProvider>
        <RouterProvider router={router} />
      </PlanProvider>
    </AuthProvider>
  </React.StrictMode>
);
