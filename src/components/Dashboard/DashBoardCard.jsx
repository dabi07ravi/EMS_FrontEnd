function DashboardCard({ title, value }) {

  return (

    <div className="rounded-2xl bg-white p-5 shadow">

      <h2 className=" text-lg text-gray-500">
        {title}
      </h2>

      <h1 className="mt-3 text-4xl font-bold">
        {value}
      </h1>

    </div>

  )
}

export default DashboardCard