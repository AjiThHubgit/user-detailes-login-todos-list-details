import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const ProtectedRoute = ({ element }) => {
  console.log(element, "element");
  const { user } = useContext(AuthContext);
  return user ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;