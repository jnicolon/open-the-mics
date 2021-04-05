import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar-container">
      <Link to="/">
        <h1 className="logo">Open the mics!</h1>
      </Link>
      <ul className="navbar-submenu">
        <li
          className={
            location.pathname === "/createamic" ? "navbar-submenu-selected" : ""
          }
        >
          <Link to="/createamic">Add a mic</Link>
        </li>
        <li
          className={location.pathname === "/" ? "navbar-submenu-selected" : ""}
        >
          <Link to="/">See all mics</Link>
        </li>
        <li
          className={
            location.pathname === "/about" ? "navbar-submenu-selected" : ""
          }
        >
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
