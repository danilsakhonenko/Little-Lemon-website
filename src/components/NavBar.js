import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button onClick={toggleMenu} id="hamburger-button" />
      <nav>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className="title-text link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="title-text link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="title-text link">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/booking" className="title-text link">
              Reservations
            </Link>
          </li>
          <li>
            <Link to="/" className="title-text link">
              Order Online
            </Link>
          </li>
          <li>
            <Link to="/" className="title-text link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;