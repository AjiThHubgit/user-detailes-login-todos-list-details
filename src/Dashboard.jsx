import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="d-flex vh-100">
      {/* Sidebar */}
      <nav className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "250px" }}>
        <h3 className="text-center">Dashboard</h3>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Profile</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Settings</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="flex-grow-1">
        {/* Header */}
        <header className="d-flex justify-content-between align-items-center p-3 shadow-sm bg-light">
          <h4>Welcome, {user.username}!</h4>
          <div className="position-relative">
            {/* Profile Image */}
            <img
              src={user.profileImage || "https://via.placeholder.com/40"} // Default image if not available
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", cursor: "pointer" }}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            />

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="position-absolute bg-white shadow-sm rounded p-2 mt-2" style={{ right: 0 }}>
                <p className="mb-1">{user.email}</p>
                <button className="btn btn-danger btn-sm w-100" onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4">
          <p>Email: {user.email}</p>
          <p>Other dashboard content goes here...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
