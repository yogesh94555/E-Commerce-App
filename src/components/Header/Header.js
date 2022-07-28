import React from "react";
import { Link } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar sticky-top shadow-sm p-3 bg-body rounded opacity-75">
        <div className="logo">
          <a href="/">E-COMMERCE</a>
        </div>
        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label
            htmlFor="checkbox_toggle"
            className="hamburger"
            style={{ color: "black" }}
          >
            &#9776;
          </label>
          <div className="menu">
            <li>
              <Link to="/" style={{ color: "black" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shoe" style={{ color: "black" }}>
                Shoe
              </Link>
            </li>
            <li>
              <Link to="/mobile" style={{ color: "black" }}>
                Mobile
              </Link>
            </li>
            <li>
              <Link to="/laptop" style={{ color: "black" }}>
                Laptop
              </Link>
            </li>
            <li>
              <Link to="/fashion" style={{ color: "black" }}>
                Fashion
              </Link>
            </li>
            <li>
              <Link to="/electronics" style={{ color: "black" }}>
                Electronics
              </Link>
            </li>
            <li>
              <Link to="/makeup" style={{ color: "black" }}>
                Makeup
              </Link>
            </li>
            <li>
              <Link to="/appliances" style={{ color: "black" }}>
                Appliances
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "black" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" style={{ color: "black" }}>
                Cart
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Header;
