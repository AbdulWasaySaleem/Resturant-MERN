import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  children,
  adminOnly = false,
  redirectTo = "/login",
}) => {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/noaccess" replace />;
  }

  return children;
};

export default ProtectedRoute;
