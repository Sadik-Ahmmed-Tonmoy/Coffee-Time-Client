import NavLinkButton from "../../Components/NavLinkButton/NavLinkButton";
import logo from "../../assets/Logo/LOGO.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 fixed">
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
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 3</a>
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
              <NavLinkButton to={"About"} name={"about"} />
            </li>
            <li>
              <NavLinkButton to={"Menu"} name={"menu"} />
            </li>
            <li>
              <NavLinkButton to={"Blog"} name={"blog"} />
            </li>
            <li>
              <NavLinkButton to={"Contact"} name={"contact"} />
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <img className="h-10 me-10" src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
