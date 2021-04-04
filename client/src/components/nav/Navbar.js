import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <Link to="/">
        <h1 className="logo">Open the mics!</h1>
      </Link>
      <ul className="navbar-submenu">
        <li>
          <Link to="/createamic">Add a mic</Link>
        </li>
        <li>
          <Link to="/">See all mics</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
