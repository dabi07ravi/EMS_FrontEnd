import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

import Profile from "./Pages/Profile/Profile"

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />

        <Route path="/login" element={<Login/> } />
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute roles={["employee","admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

          <Route
          path="/profile"
          element={
            // <ProtectedRoute roles={["employee", "admin"]}>
              <Profile />
            // </ProtectedRoute>
          }
        />

        <Route
          path="/employee-dashboard"
          element={
            <ProtectedRoute roles={["employee", "admin"]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
