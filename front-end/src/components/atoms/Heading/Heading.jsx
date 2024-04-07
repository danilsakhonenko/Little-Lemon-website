import React from "react";
import styles from './Heading.module.css';

export const Heading = ({ externalClasses, level, color, children }) => {
  const HeadingTag = `h${level}`;
  const styleClass = `${styles[[`h${level}`]]} ${styles[color]} ${externalClasses}`
  return <HeadingTag className={styleClass} style={{color:color}}>{children}</HeadingTag>;
};

