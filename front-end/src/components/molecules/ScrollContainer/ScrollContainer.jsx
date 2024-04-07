import React, { useEffect, useState } from "react";
import styles from "./ScrollContainer.module.css";

export const ScrollContainer = ({ externalClasses, children }) => {
  const styleClass = [styles.container, externalClasses].join(" ");

  return (
    <section className={styleClass}>
      {children}
    </section>
  );
};
