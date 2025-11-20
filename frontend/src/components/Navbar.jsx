import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-xl">
          BizPlan AI
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/generate" className="hover:text-gray-200">
            Generate Plan
          </Link>
          <Link to="/dashboard" className="hover:text-gray-200">
            Dashboard
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-gray-200"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="border border-white px-3 py-1 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
