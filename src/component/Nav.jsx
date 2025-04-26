import { NavLink } from "react-router";
import { Link } from "react-router";
import { CgProfile } from "react-icons/cg";

const Nav = ({ className = "" }) => {
  return (
    <div className={className}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/New">New</NavLink>
      <NavLink to="/Used">Used Car</NavLink>
      <Link to={'/profile'}>
          <CgProfile className="text-4xl"/>
        </Link>
    </div>
  );
};

export default Nav;
