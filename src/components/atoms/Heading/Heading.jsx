import React from "react";
import styles from './Heading.module.css';

export const Heading = ({ externalClasses, level, children }) => {
  const HeadingTag = `h${level}`;
  const styleClass = `${styles[[`h${level}`]]} ${externalClasses}`
  return <HeadingTag className={styleClass}>{children}</HeadingTag>;
};

