import React from "react";
import "./Navbar.css";

const Navbar = () => {
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
      </ul>
    </div>
  );
};

export default Navbar;
