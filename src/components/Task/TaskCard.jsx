function TaskCard({

  task,

  showActions,

  handleDeleteTask,

  handleStatusChange

}) {

  return (

    <div
      className="rounded-xl bg-white p-5 shadow"
    >

      {/* TOP SECTION */}
      <div
        className="flex items-start justify-between"
      >

        <div>

          <h1 className="text-2xl font-bold">
            {task.title}
          </h1>


          <p className="mt-2 text-gray-500">
            {task.description}
          </p>

        </div>



        {/* STATUS */}
        {
          handleStatusChange ? (

            <select

              value={task.status}

              onChange={(e) =>

                handleStatusChange(
                  task.id,
                  e.target.value
                )

              }

              className={`

                rounded px-3 py-2 text-white

                ${
                  task.status === "Pending"
                    ? "bg-yellow-500"

                  : task.status === "In Progress"
                    ? "bg-blue-500"

                  : "bg-green-500"
                }

              `}
            >

              <option value="Pending">
                Pending
              </option>

              <option value="In Progress">
                In Progress
              </option>

              <option value="Completed">
                Completed
              </option>

            </select>

          ) : (

            <span
              className={`

                rounded px-4 py-2 text-white

                ${
                  task.status === "Pending"
                    ? "bg-yellow-500"

                  : task.status === "In Progress"
                    ? "bg-blue-500"

                  : "bg-green-500"
                }

              `}
            >
              {task.status}
            </span>

          )
        }

      </div>



      {/* DETAILS */}
      <div
        className="mt-5 grid grid-cols-3 gap-5"
      >

        <div>

          <h2 className="text-sm text-gray-500">
            Assigned To
          </h2>

          <p className="font-semibold">
            {task.assignedTo}
          </p>

        </div>



        <div>

          <h2 className="text-sm text-gray-500">
            Priority
          </h2>

          <p className="font-semibold">
            {task.priority}
          </p>

        </div>



        <div>

          <h2 className="text-sm text-gray-500">
            Deadline
          </h2>

          <p className="font-semibold">
            {task.deadline}
          </p>

        </div>

      </div>



      {/* ACTIONS */}
      {
        showActions && (

          <div className="mt-5 flex gap-4">

            <button
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Edit
            </button>


            <button

              onClick={() =>
                handleDeleteTask(task.id)
              }

              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>

          </div>

        )
      }

    </div>

  )

}

export default TaskCard