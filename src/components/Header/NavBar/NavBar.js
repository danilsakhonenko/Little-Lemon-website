import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <button onClick={toggleMenu} className={styles.hamburgerButton}/>
      <nav>
        <ul className={`${styles.navList} ${isMenuOpen ? styles.open : ""}`}>
          <li>
            <NavLink to="/" activeClassName="active" className="title-text link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" className="title-text link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" activeClassName="active" className="title-text link">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/booking" activeClassName="active" className="title-text link">
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" activeClassName="active" className="title-text link">
              Order Online
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active" className="title-text link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;