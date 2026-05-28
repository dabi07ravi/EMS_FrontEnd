import { useContext } from "react";

import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";

import { TaskContext } from "../../context/TaskContext";

import { AuthContext } from "../../context/AuthContext";

import TaskCard from "../Task/TaskCard";

function EmployeeDashboard() {
  const { tasks, setTasks } = useContext(TaskContext);

  const { loggedInUser } = useContext(AuthContext);

  // FILTER TASKS
  const employeeTasks = tasks.filter(
    (task) => task.assignedTo === loggedInUser.name,
  );

  function handleStatusChange(taskId, newStatus) {
    const updatedTasks = tasks.map((task) => {
      // FIND TARGET TASK
      if (task.id === taskId) {
        return {
          ...task,

          status: newStatus,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="min-h-screen flex-1 bg-gray-100">
        {/* HEADER */}
        <Header />

        <div className="p-5">
          <h1 className="mb-5 text-3xl font-bold">
            Welcome, {loggedInUser.name}
          </h1>

          {/* TASKS SECTION */}
          <div>
            <h1 className="mb-5 text-2xl font-bold">My Tasks</h1>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                {employeeTasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    handleStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
