import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.logIn);

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
