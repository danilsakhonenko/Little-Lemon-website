import React from "react";
import styles from "./ActionButton.module.css";
import { Link } from "react-router-dom";

export const ActionButton = ({ link, externalClasses, ...props }) => {
  const styleClass = `${styles.button} ${externalClasses}`;
  return link ? (
    <Link
      to={link}
      role='button'
      className={styleClass}
      {...props}
      aria-disabled={props.disabled}
    >
      {props.value}
    </Link>
  ) : (
    <input
      type='button'
      value={props.value}
      className={styleClass}
      aria-disabled={props.disabled}
    />
  );
};
