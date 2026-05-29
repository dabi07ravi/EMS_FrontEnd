import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import { EmployeeContext } from "../../context/EmployeeContext";



const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const { employees } = useContext(EmployeeContext);


  function handleSubmit(e) {
    e.preventDefault();

    const user = employees.find(
      (emp) => emp.email === email && emp.password === password,
    );

    if (user) {
      login(user);

      if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/employee-dashboard");
      }
    }

    setEmail("");
    setPassword("");
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[350px] rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-5 text-center text-3xl font-bold">EMS Login</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter email"
            className="rounded border p-3 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="Enter password"
            className="rounded border p-3 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="rounded bg-blue-500 p-3 text-white">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
