import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
