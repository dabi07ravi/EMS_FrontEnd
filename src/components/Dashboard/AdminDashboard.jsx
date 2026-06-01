import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import DashboardCard from "./DashboardCard";
import TaskCard from "../Task/TaskCard";
import { useState, useContext } from "react";

import { EmployeeContext } from "../../context/EmployeeContext";

import { TaskContext } from "../../context/TaskContext";

function AdminDashboard() {
  const { employees, setEmployees } = useContext(EmployeeContext);

  const { tasks, setTasks } = useContext(TaskContext);

  // FORM STATES
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [editId, setEditId] = useState(null);
  const [password] = useState("123");

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [assignedTo, setAssignedTo] = useState("");

  const [priority, setPriority] = useState("Low");

  const [deadline, setDeadline] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddEmployee(e) {
    e.preventDefault();

    // UPDATE EMPLOYEE
    if (editId) {
      const updatedEmployees = employees.map((emp) => {
        if (emp.id === editId) {
          return {
            ...emp,
            name,
            email,
            password,
            department,
            role: "employee",
          };
        }

        return emp;
      });

      setEmployees(updatedEmployees);

      setEditId(null);
    }

    // ADD EMPLOYEE
    else {
      const newEmployee = {
        id: Date.now(),
        name,
        email,
        password,
        role: "employee",
        department,
      };

      setEmployees([...employees, newEmployee]);
    }

    // CLEAR FORM
    setName("");
    setEmail("");
    setDepartment("");
  }

  // DELETE EMPLOYEE
  function handleDeleteEmployee(id) {
    const filteredEmployees = employees.filter((emp) => emp.id !== id);

    setEmployees(filteredEmployees);
  }

  function handleEditEmployee(emp) {
    setName(emp.name);
    setEmail(emp.email);
    setDepartment(emp.department);

    setEditId(emp.id);
  }

  function handleCreateTask(e) {
    e.preventDefault();

    const newTask = {
      id: Date.now(),

      title,

      description,

      assignedTo,

      priority,

      deadline,

      status: "Pending",
    };

    setTasks([...tasks, newTask]);

    // CLEAR FORM
    setTitle("");
    setDescription("");
    setAssignedTo("");
    setPriority("Low");
    setDeadline("");
  }

  function handleDeleteTask(id) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    setTasks(filteredTasks);
  }


  const filteredEmployees = employees.filter((emp) => {

  return (
    emp.role !== "admin" &&
    (
      emp.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      ||

      emp.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      ||

      emp.department
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    )
  );

});

  // TOTAL TASKS
  const totalTasks = tasks.length;

  // COMPLETED TASKS
  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  // PENDING TASKS
  const pendingTasks = tasks.filter((task) => task.status === "Pending").length;

  // IN PROGRESS TASKS
  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  let totalEmployee = employees.filter((emp) => emp.role !== "admin");

  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />

        <div className="p-5">
          <h1 className="mb-5 text-3xl font-bold">Welcome Admin</h1>

          <div className="grid grid-cols-4 gap-5">
            <DashboardCard
              title="Total Employees"
              value={totalEmployee.length}
            />

            <DashboardCard title="Total Tasks" value={totalTasks} />

            <DashboardCard title="Completed Tasks" value={completedTasks} />

            <DashboardCard title="Pending Tasks" value={pendingTasks} />

            <DashboardCard title="In Progress Tasks" value={inProgressTasks} />
          </div>

          <div className="mt-10 rounded-xl bg-white p-5 shadow">
            <h1 className="mb-5 text-2xl font-bold">
              {editId ? "Edit Employee" : "Add Employee"}{" "}
            </h1>

            <form onSubmit={(e) => handleAddEmployee(e)} className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 rounded border p-3 outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded border p-3 outline-none"
              />

              <input
                type="text"
                placeholder="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="flex-1 rounded border p-3 outline-none"
              />

              <button className="rounded bg-green-500 px-5 text-white">
                {editId ? "Update" : "Add"}
              </button>
            </form>

            <br />

            <h1 className="mb-5 text-2xl font-bold">Create Task</h1>

            <form
              onSubmit={handleCreateTask}
              className="grid grid-cols-2 gap-5"
            >
              {/* TASK TITLE */}
              <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="rounded border p-3 outline-none"
              />

              {/* PRIORITY */}
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="rounded border p-3 outline-none"
              >
                <option value="Low">Low</option>

                <option value="Medium">Medium</option>

                <option value="High">High</option>
              </select>

              {/* DESCRIPTION */}
              <textarea
                placeholder="Task Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-2 rounded border p-3 outline-none"
                rows="4"
              ></textarea>

              {/* ASSIGN EMPLOYEE */}
              <select
                value={assignedTo}
                onChange={(e) => setAssignedTo(e.target.value)}
                className="rounded border p-3 outline-none"
              >
                <option value="">Select Employee</option>

                {employees.map((emp) => (
                  <option key={emp.id} value={emp.name}>
                    {emp.name}
                  </option>
                ))}
              </select>

              {/* DEADLINE */}
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="rounded border p-3 outline-none"
              />

              {/* BUTTON */}
              <button className="col-span-2 rounded bg-blue-500 py-3 text-white">
                Assign Task
              </button>
            </form>
          </div>

          <div className="mt-10">
            <h1 className="mb-5 text-2xl font-bold">All Tasks</h1>

            <div className="flex flex-col gap-5">
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  showActions={true}
                  handleDeleteTask={handleDeleteTask}
                />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h1 className="mb-5 text-2xl font-bold">Employees</h1>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Search Employee..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded border p-3"
              />

              {filteredEmployees.map(
                (emp) =>
                    (
                    <div
                      key={emp.id}
                      className="flex items-center justify-between rounded-lg bg-white p-5 shadow"
                    >
                      {/* LEFT SIDE */}
                      <div>
                        <h1 className="text-xl font-bold">{emp.name}</h1>

                        <p className="text-gray-500">{emp.email}</p>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className="flex items-center gap-4">
                        <h2 className="rounded bg-blue-100 px-3 py-1 text-blue-700">
                          {emp.department}
                        </h2>

                        <button
                          onClick={() => handleEditEmployee(emp)}
                          className="rounded bg-yellow-500 px-4 py-2 text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => handleDeleteEmployee(emp.id)}
                          className="rounded bg-red-500 px-4 py-2 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
