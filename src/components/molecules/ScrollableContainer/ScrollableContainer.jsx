import React from "react";
import styles from './ScrollableContainer.module.css'

export const ScrollableContainer = ({ externalClasses, children }) => {
  const styleClass = `${styles.container} ${externalClasses}`
  return (
    <section className={styleClass}>
      {children}
    </section>
  );
}