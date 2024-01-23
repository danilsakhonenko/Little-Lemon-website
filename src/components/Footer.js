import React from "react";
import Logo from "../Logo.svg";

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Company logo" width="250px" />
      <section>
        <h3>Doormat Navigation</h3>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h3>Contact Information</h3>
        <ul>
            <li>
                Adress:<br/>xxxxxxxxxx xxxxxxxx
            </li>
            <li>
                Phone number:<br/>xxxxxxxxxxxx
            </li>
            <li>
                E-mail:<br/>xxxxxxxxxx@xxx.xxx
            </li>
          </ul>
      </section>
      <section>
        <h3>Social Media</h3>
        <nav>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
