function DashboardCard({ title, value }) {

  return (

    <div className="rounded-xl bg-white p-5 shadow">

      <h2 className="text-gray-500">
        {title}
      </h2>

      <h1 className="mt-3 text-3xl font-bold">
        {value}
      </h1>

    </div>

  )
}

export default DashboardCard