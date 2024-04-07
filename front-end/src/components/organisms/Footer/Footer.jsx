import React from "react";
import { Logo } from "../../atoms/Logo";
import { Title } from "../../atoms/Title";
import { Paragraph } from "../../atoms/Paragraph";
import styles from "./Footer.module.css";
import { NavBar } from "../../molecules/NavBar";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <Logo externalClasses={styles.logo} />
      <section className={styles.section}>
        <Title>Doormat Navigation</Title>
        <NavBar type='secondary'/>
      </section>
      <section className={styles.section}>
        <Title>Contact Information</Title>
        <Paragraph type="regular">
          Adress: <br />
          xxxxxxxxxx xxxxxxxx
        </Paragraph>
        <Paragraph type="regular">
          Phone number: <br />
          xxxxxxxxxxxx
        </Paragraph>
        <Paragraph type="regular">
          E-mail: <br />
          xxxxxxxxxx@xxx.xxx
        </Paragraph>
      </section>
      <section className={styles.section}>
        <Title>Social Media</Title>
        <a className={styles.link} href="/">
          Instagram
        </a>
        <a className={styles.link} href="/">
          Twitter
        </a>
        <a className={styles.link} href="/">
          Facebook
        </a>
      </section>
    </footer>
  );
};
