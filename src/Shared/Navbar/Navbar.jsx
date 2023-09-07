import { Link } from "react-router-dom";
import NavLinkButton from "../../Components/NavLinkButton/NavLinkButton";
import logo from "../../assets/Logo/LOGO.png";
import { useContext } from "react";
import { AuthContext } from "./../../providers/AuthProvider/AuthProvider";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart()
  const total = cart.reduce((sum, item) => parseFloat(item.Price) + sum, 0);
  console.log(cart);
  const roundedTotal = total.toFixed(2);

  return (
    <>
      <div className="navbar bg-transparent fixed z-20">
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
          <Link to={'/'}><img className="h-10 md:me-10" src={logo} alt="" /></Link>
          

          <div className="flex md:mx-5 ">
          {user &&   <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart?.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-white shadow-2xl"
              >
                <div className="card-body">
                  <span className="font-bold text-lg text-black">
                    Quantity: {cart?.length}
                  </span>
                  <span className="font-extrabold text-black">Subtotal: ${roundedTotal}</span>
                  <div className="card-actions">
                    <Link to="/dashboard/myCart">
                      {" "}
                      <button className="green-btn">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>}
            {user && (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white md:bg-transparent rounded-box w-52"
                >
                  <li>
                    <button className="green-btn shadow-2xl" onClick={() => logOut()}>Logout</button>
                  </li>
                </ul>
              </div>
            )}
            {!user && (
              <Link to="/login">
                <button className="green-btn w-full mx-2">LogIn</button>
              </Link>
            )}
          </div>



        </div>
      </div>
    </>
  );
};

export default Navbar;
