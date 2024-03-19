import React from "react";
import { Logo } from "../../atoms/Logo";
import { NavigationLink } from "../../atoms/NavigationLink";
import { navLinks } from "../../../router/index";
import { Title } from "../../atoms/Title";
import { Paragraph } from "../../atoms/Paragraph";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <Logo externalClasses={styles.logo} />
      <nav>
        <Title>Doormat Navigation</Title>
        {navLinks.map((link) => (
          <NavigationLink key={link.path} to={link.path} type="secondary">
            {link.title}
          </NavigationLink>
        ))}
      </nav>
      <section>
        <Title>Contact Information</Title>
        <Paragraph>
          Adress: <br />
          xxxxxxxxxx xxxxxxxx
        </Paragraph>
        <Paragraph>
          Phone number: <br />
          xxxxxxxxxxxx
        </Paragraph>
        <Paragraph>
          E-mail: <br />
          xxxxxxxxxx@xxx.xxx
        </Paragraph>
      </section>
      <section>
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
