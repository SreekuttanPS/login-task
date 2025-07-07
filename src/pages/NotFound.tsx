import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gray-900">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="text-blue-400 underline hover:text-blue-600">
        Go back home
      </Link>
    </div>
  );
};
export default NotFound;
