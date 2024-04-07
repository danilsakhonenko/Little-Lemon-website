import React from "react";
import styles from './LoginTemplate.module.css'
import { Logo } from "../../atoms/Logo";
import { NavigationLink } from "../../atoms/NavigationLink";

export const LoginTemplate = ({ children }) => {
  return (
    <>
      <header className={`${styles.header} container`}>
        <NavigationLink to='/' type='main'>{`< Home`}</NavigationLink>
        <Logo externalClasses={styles.logo}/>
      </header>
      <main>
        {children}
      </main>
    </>
  );
};
