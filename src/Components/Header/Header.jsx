import { NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("Out"))
      .catch((error) => console.error);
  };
  const navLinks = (
    <>
      <ul className="flex text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/AboutUs"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Careers"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            Career
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            SignUp
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/LogIn"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline" : ""
            }
          >
            LogIn
          </NavLink>
        </li>
      </ul>
    </>
  );

  return (
    <div className="navbar bg-base-100 text-[#FF477E]">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-80"
          >
            {navLinks}
          </ul>
        </div>
        <img
          className="h-16 w-15"
          src="https://i.ibb.co/qpRtpVR/360-F-313374706-bwb-Ul-NUrg6v5b-Iaec-Wet2sil-UL2-Bbc-Q3.jpg"
          alt=""
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="ml-40 md:ml-12lg:ml-12 flex flex-col lg:flex-row">
          {user && <span className="relative">{user.email}</span>}
          <a
            onClick={handleLogOut}
            className="btn text-[#FF477E] sm:w-20 md:w-32 ml-40 md:ml-0 lg:ml-0  "
          >
            Sign Out
          </a>
        </div>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {user && (
              <div className="relative">
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/yhFLYDb/user.png" // Fallback image URL
                    alt="Fallback User Profile"
                    className="w-10 h-10 rounded-full"
                  />
                )}
              </div>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
