import React from "react";
import Logo from "../Logo.svg";

function Footer() {
  return (
    <footer className="container">
      <img src={Logo} className="logo" alt="Company logo"/>
      <section>
        <h3 className='title-text'>Doormat Navigation</h3>
        <nav>
          <ul>
            <li>
              <a className='lead-text' href="#">Home</a>
            </li>
            <li>
              <a className='lead-text' href="#">About</a>
            </li>
            <li>
              <a className='lead-text' href="#">Menu</a>
            </li>
            <li>
              <a className='lead-text' href="#">Reservations</a>
            </li>
            <li>
              <a className='lead-text' href="#">Order Online</a>
            </li>
            <li>
              <a className='lead-text' href="#">Login</a>
            </li>
          </ul>
        </nav>
      </section>
      <section>
        <h3 className='title-text'>Contact Information</h3>
        <ul>
            <li>
              <p className='lead-text'>Adress:<br/>xxxxxxxxxx xxxxxxxx</p>
            </li>
            <li>
              <p className='lead-text'>Phone number:<br/>xxxxxxxxxxxx</p>
            </li>
            <li>
              <p className='lead-text'>E-mail:<br/>xxxxxxxxxx@xxx.xxx</p>
            </li>
          </ul>
      </section>
      <section>
        <h3 className='title-text'>Social Media</h3>
        <nav>
          <ul>
            <li>
              <a className='lead-text' href="#">Instagram</a>
            </li>
            <li>
              <a className='lead-text' href="#">Twitter</a>
            </li>
            <li>
              <a className='lead-text' href="#">Facebook</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
