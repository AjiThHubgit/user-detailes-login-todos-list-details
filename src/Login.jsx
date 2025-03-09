import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

function Login() {
  const { user, login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!credentials.username.trim() || !credentials.password.trim()) {
      setError("Username and password cannot be empty.");
      return;
    }

    try {
      const success = await login(credentials.username, credentials.password);
      if (success) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <h3 className="text-center mb-3">User Login</h3>
        {error && <p className="text-danger text-center">{error}</p>}
        <form onSubmit={handleOnSubmit}>
          <div className="form-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              value={credentials.username}
              onChange={handleOnChange}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="form-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={handleOnChange}
              style={{ borderRadius: "5px" }}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{ borderRadius: "5px" }}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;