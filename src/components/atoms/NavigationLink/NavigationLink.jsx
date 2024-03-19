import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavigationLink.module.css";

export const NavigationLink = ({ type, children, to }) => {
  const styleClass = `${styles.link} ${styles[type]}`;
  return (
    <NavLink to={to} className={styleClass}>
      {children}
    </NavLink>
  );
};
