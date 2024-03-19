import React from "react";
import styles from "./ActionButton.module.css";

export const ActionButton = ({ link, externalClasses, ...props }) => {
  const styleClass = `${styles.button} ${externalClasses}`;
  return(<input
    type="button"
    className={styleClass}
    {...props}
    aria-disabled={props.disabled}
  />);
};
