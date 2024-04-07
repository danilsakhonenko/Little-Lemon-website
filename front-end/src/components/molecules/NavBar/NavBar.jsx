import React from "react";
import styles from "./NavBar.module.css";
import { NavigationLink } from "../../atoms/NavigationLink";
import { navLinks } from "../../../router/index";

export const NavBar = ({ type, externalClasses }) => {
  const styleClass = `${styles.navBar} ${styles[type]} ${externalClasses}`;
  return (
    <nav className={styleClass}>
      <ul>
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavigationLink to={link.path} type={type}>
              {link.title}
            </NavigationLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
