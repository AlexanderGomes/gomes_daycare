import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const { isAdmin } = useSelector((state) => state.auth);

  const Logout = () => {
    dispatch(logout());
  };

  const toggleComponents = () => {
    setToggle(!toggle);
  };

  return (
    <div className="nav__main">
      <div className="nav__logo">
        <p className="footer__logo">
          Gomes<span className="footer__logo__span">Daycare</span>
        </p>
      </div>
      <ul className="nav__links">
        {isAdmin ? (
          <>
            <Link to={"/dashboard"} className="link">
              <li>Dashboard</li>
            </Link>
            <Link to={"/management"} className="link">
              <li>Management</li>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/profile"} className="link">
              <li>Profile</li>
            </Link>
            <Link to={"/checkout"} className="link">
              <li>Checkout</li>
            </Link>
          </>
        )}
        <li onClick={Logout}>logout</li>
      </ul>
      <GiHamburgerMenu
        className="ham__icon"
        onClick={() => setToggle(!toggle)}
      />

      {toggle && (
        <div className="navbar__overlay">
          <div className="navbar__content">
            <div className="close__icon">
              <AiOutlineClose onClick={() => setToggle(!toggle)} />
            </div>
            <ul className="links">
              {isAdmin ? (
                <>
                  <Link
                    to={"/dashboard"}
                    className="link"
                    onClick={toggleComponents}
                  >
                    <li>Dashboard</li>
                  </Link>
                  <Link
                    to={"/management"}
                    className="link"
                    onClick={toggleComponents}
                  >
                    <li>Management</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to={"/profile"}
                    className="link"
                    onClick={toggleComponents}
                  >
                    <li>Profile</li>
                  </Link>
                  <Link
                    to={"/checkout"}
                    className="link"
                    onClick={toggleComponents}
                  >
                    <li>Checkout</li>
                  </Link>
                </>
              )}
              <li onClick={Logout}>Logout</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
