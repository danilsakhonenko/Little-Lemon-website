import React, {useState} from "react";
import { NavBar } from "../../molecules/NavBar";
import { Logo } from "../../atoms/Logo";
import { HamburgerButton } from "../../atoms/HamburgerButton";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <header className={`${styles.header} container`}>
      <HamburgerButton
        onClick={toggleMenu}
        externalClasses={styles.hamburgerButton}
      />
      <Logo externalClasses={styles.logo} />
      <NavBar externalClasses={`${styles.navBar} ${isMenuOpen ? styles.open : ""}`} />
    </header>
  );
};
