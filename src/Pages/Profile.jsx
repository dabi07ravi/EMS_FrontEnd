import { useState, useContext } from "react";

import { AuthContext } from "../context/AuthContext";

import { EmployeeContext } from "../context/EmployeeContext";



function Profile() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  const { employees, setEmployees } = useContext(EmployeeContext);

  const [name, setName] = useState(loggedInUser.name);

  const [email, setEmail] = useState(loggedInUser.email);

    const [password, setPassword] = useState(loggedInUser.password);
    

  function handleUpdateProfile(e) {
    e.preventDefault();

    const updatedUser = {
      ...loggedInUser,

      name,

      email,
      password,
    };

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === loggedInUser.id) {
        return updatedUser;
      }

      return employee;
    });

    setEmployees(updatedEmployees);

      setLoggedInUser(updatedUser);

      alert("Profile Updated");

      setName('')
    setEmail('')
      setPassword('')

  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">Profile</h1>

      <form
        onSubmit={handleUpdateProfile}
        className="max-w-xl rounded bg-white p-8 shadow"
      >
        {/* NAME */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded border p-3"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border p-3"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-5">
          <label className="mb-2 block font-semibold">Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border p-3"
          />
        </div>

        <button className="rounded bg-black-500 px-6 py-3 text-white">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
