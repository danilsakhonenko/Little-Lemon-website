import React from "react";
import styles from "./Logo.module.css";
import LogoImg from '../../../assets/images/logo.svg'

export const Logo = ({externalClasses}) => {
  const styleClass = `${styles.logo} ${externalClasses}`
  return <img src={LogoImg} className={styleClass} alt='Company logo'/>;
};

