import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";

function Header() {
  const { logout, loggedInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();

    navigate("/");
  }

  return (
    <div className="flex items-center justify-between border-b bg-white p-5 shadow-sm">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-300"></div>

        <h2 className="font-semibold">{loggedInUser.name}</h2>

        <button
          onClick={handleLogout}
          className="rounded bg-red-500 px-4 py-2 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
