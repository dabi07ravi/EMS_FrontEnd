import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import EmployeeProvider from "./context/EmployeeContext";

import AuthProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <EmployeeProvider>
      <App />
    </EmployeeProvider>
  </AuthProvider>,
);
