import { NavLink } from "react-router-dom";


const NavLinkButton = ({to, name}) => {
    return (
        <>
             <NavLink
                    to={to}
                    className={({ isActive, }) =>
                      isActive
                        ? "text-blue-600 font-bold"
                        : ""
                    }
                  >
                    {name}
                  </NavLink>
        </>
    );
};

export default NavLinkButton;