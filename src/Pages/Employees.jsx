import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { EmployeeContext } from "../context/EmployeeContext";

function Employees() {

  const { employees } =
    useContext(EmployeeContext);

  const [searchTerm, setSearchTerm] =
    useState("");

  const filteredEmployees =
    employees.filter(emp =>
      emp.role !== "admin" &&
      emp.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );

  return (
    <div className="p-8">

      <h1 className="mb-5 text-3xl font-bold">
        Employee Management
      </h1>

      <input
        type="text"
        placeholder="Search Employee..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="mb-5 w-full rounded border p-3"
      />

      <div className="flex flex-col gap-4">

        {filteredEmployees.map((emp) => (

          <div
            key={emp.id}
            className="flex items-center justify-between rounded-lg bg-white p-5 shadow"
          >

            <div>

              <Link
                to={`/employees/${emp.id}`}
                className="text-xl font-bold text-black-600 hover:underline"
              >
                {emp.name}
              </Link>

              <p className="text-gray-500">
                {emp.email}
              </p>

            </div>

            <div>

              <span className="rounded bg-blue-100 px-3 py-1 text-black-700">
                {emp.department}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Employees;