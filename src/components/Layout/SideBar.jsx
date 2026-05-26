function Sidebar() {

  return (

    <div className="h-screen w-[250px] bg-gray-900 text-white">

      <h1 className="p-5 text-2xl font-bold border-b border-gray-700">
        EMS
      </h1>

      <div className="flex flex-col gap-2 p-4">

        <button className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Dashboard
        </button>

        <button className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Employees
        </button>

        <button className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Tasks
        </button>

        <button className="rounded bg-gray-800 p-3 text-left hover:bg-gray-700">
          Profile
        </button>

      </div>

    </div>

  )
}

export default Sidebar