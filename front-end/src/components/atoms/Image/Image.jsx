import React from "react";
import styles from "./Image.module.css";

export const Image = ({ src, externalClasses, alt }) => {
  const styleClass = `${styles.image} ${externalClasses}`;
  return <img src={src} className={styleClass} alt={alt} />;
};

