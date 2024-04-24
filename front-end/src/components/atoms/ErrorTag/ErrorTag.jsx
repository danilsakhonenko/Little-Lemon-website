import React from "react";
import styles from "./ErrorTag.module.css";

export const ErrorTag =({children,externalClasses, id})=> {
  const styleClass = [styles.error,externalClasses].join(' ')
  return (
      <div id={id} className={styleClass} role="alert">
        {children}
      </div>
  );
}