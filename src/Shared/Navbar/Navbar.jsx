import { Link } from "react-router-dom";
import NavLinkButton from "../../Components/NavLinkButton/NavLinkButton";
import logo from "../../assets/Logo/LOGO.png";
import { useContext } from "react";
import { AuthContext } from "./../../providers/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <>
      <div className="navbar bg-transparent fixed z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLinkButton to={"/"} name={"Home"} />
              </li>
              <li>
                <NavLinkButton to={"/about"} name={"About"} />
              </li>
              <li>
                <NavLinkButton to={"/menu"} name={"Menu"} />
              </li>
              <li>
                <NavLinkButton to={"Blog"} name={"blog"} />
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLinkButton to={"/"} name={"Home"} />
            </li>
            <li>
              <NavLinkButton to={"/about"} name={"About"} />
            </li>
            <li>
              <NavLinkButton to={"/menu"} name={"Menu"} />
            </li>
            <li>
              <NavLinkButton to={"Blog"} name={"blog"} />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="h-10 md:me-10" src={logo} alt="" />
          {user ? (
            <button onClick={() => logOut()} className="green-btn mx-2 md:me-6">
              Logout
            </button>
          ) : (
            <Link to={"/login"}>
              <button className="green-btn mx-2 md:me-6">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
