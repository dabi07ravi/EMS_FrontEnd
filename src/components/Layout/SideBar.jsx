import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[250px] text-white bg-gray-900">
      <h1 className="p-5 text-2xl font-bold border-b border-gray-700">EMS</h1>

      <div className="flex flex-col gap-2 p-4">
        <Link
          to={"/admin-dashboard"}
          className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Dashboard
        </Link>

        <Link to={'/employees'}
          className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700 block"
        >
          Employees
        </Link>

        <Link className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Tasks
        </Link>

        <Link to={'/profile'}
          className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700 block">
            Profile
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
