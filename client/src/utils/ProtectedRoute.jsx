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

  // Correct check: block only if adminOnly is true AND user is not an admin or demo admin
  if (adminOnly && !user.isAdmin && !user.isDemoAdmin) {
    return <Navigate to="/noaccess" replace />;
  }

  return children;
};

export default ProtectedRoute;
