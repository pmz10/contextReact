import { NavLink } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const Navbar = () => {
  const { user, setUser } = useUserContext();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {user && (
        <>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <button onClick={() => setUser(false)}>LogOut</button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
