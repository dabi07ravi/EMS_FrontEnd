import { useParams } from "react-router-dom";

import { useContext } from "react";

import { EmployeeContext } from "../context/EmployeeContext";

import { TaskContext } from "../context/TaskContext";

function EmployeeDetails() {
  const { id } = useParams();

  const { employees } = useContext(EmployeeContext);

  const { tasks } = useContext(TaskContext);

  const employee = employees.find((emp) => emp.id === Number(id));

  if (!employee) {
    return <h1>Employee Not Found</h1>;
  }

  const employeeTasks = tasks.filter(
    (task) => task.assignedTo === employee.name,
  );

  const totalTasks = employeeTasks.length;

  const completedTasks = employeeTasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const pendingTasks = employeeTasks.filter(
    (task) => task.status === "Pending",
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-3xl font-bold">Employee Details</h1>

      {/* PROFILE CARD */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 text-3xl font-bold text-white">
            {employee.name[0]}
          </div>

          <div>
            <h2 className="text-2xl font-bold">{employee.name}</h2>

            <p className="text-gray-500">{employee.email}</p>

            <p className="mt-2">
              Department:
              <span className="ml-2 rounded bg-blue-100 px-3 py-1 text-blue-700">
                {employee.department}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* ANALYTICS */}
      <div className="mb-8 grid grid-cols-3 gap-5">
        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-lg font-semibold">Total Tasks</h2>

          <p className="mt-2 text-3xl font-bold">{totalTasks}</p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-lg font-semibold">Completed</h2>

          <p className="mt-2 text-3xl font-bold text-green-600">
            {completedTasks}
          </p>
        </div>

        <div className="rounded-xl bg-white p-5 shadow">
          <h2 className="text-lg font-semibold">Pending</h2>

          <p className="mt-2 text-3xl font-bold text-yellow-500">
            {pendingTasks}
          </p>
        </div>
      </div>

      {/* TASKS */}
      <div>
        <h2 className="mb-5 text-2xl font-bold">Assigned Tasks</h2>

        <div className="flex flex-col gap-4">
          {employeeTasks.map((task) => (
            <div key={task.id} className="rounded-xl bg-white p-5 shadow">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">{task.title}</h3>

                <span
                  className={`rounded px-3 py-1 text-white
                  ${
                    task.status === "Pending"
                      ? "bg-yellow-500"
                      : task.status === "In Progress"
                        ? "bg-blue-500"
                        : "bg-green-500"
                  }`}
                >
                  {task.status}
                </span>
              </div>

              <p className="mt-3 text-gray-600">{task.description}</p>

              <div className="mt-4 flex justify-between">
                <p>
                  Priority:
                  <strong> {task.priority}</strong>
                </p>

                <p>
                  Deadline:
                  <strong> {task.deadline}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
