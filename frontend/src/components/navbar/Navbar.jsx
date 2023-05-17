import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/AuthSlice";
import "./Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav__main">
      <div className="nav__logo">
        <p className="footer__logo">
          Gomes<span className="footer__logo__span">Daycare</span>
        </p>
      </div>
      <ul className="nav__links">
        <li>Profile</li>
        <li>Checkout</li>
        <li onClick={Logout}>logout</li>
      </ul>
    </div>
  );
};

export default Navbar;
