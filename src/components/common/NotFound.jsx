
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        
        {/* Error Code */}
        <h1 className="text-7xl font-bold text-red-500">404</h1>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-500 mt-3">
          Sorry, the page you are looking for does not exist.
        </p>

        {/* Button */}
        <button
          className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default NotFound