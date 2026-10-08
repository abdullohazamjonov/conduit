import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="mx-50 mr-50 border-b border-gray-300">
      <div className="container m-auto flex justify-between items-center py-3">
        <Link to="/" className="text-green-500 font-bold text-2xl">
          Conduit
        </Link>
        <ul className="flex gap-6 text-base">
          <li>
            <Link to="/" className="text-gray-500 hover:text-green-500">
              Home
            </Link>
          </li>

          {/* Register qilmagan bo'lsa */}
          {!user && (
            <>
              <li>
                <Link to="/login" className="text-gray-500 hover:text-green-500">
                  Sign in
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-500 hover:text-green-500">
                  Sign up
                </Link>
              </li>
            </>
          )}

          {/* Register qilgan bo'lsa */}
          {user && (
            <>
              <li>
                <Link to="/new-article" className="text-gray-500 hover:text-green-500">
                  New Article
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-500 hover:text-green-500">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-gray-500 hover:text-green-500">
                  admin
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-gray-500 hover:text-green-500">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}