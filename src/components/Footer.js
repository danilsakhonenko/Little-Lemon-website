import React from "react";
import Logo from "../Logo.svg";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container">
      <img src={Logo} className="logo" alt="Company logo"/>
      <section>
        <h3 className='title-text'>Doormat Navigation</h3>
        <nav>
          <ul>
            <li>
              <Link to='/' className='lead-text link' href="#">Home</Link>
            </li>
            <li>
              <Link to='/' className='lead-text link' href="#">About</Link>
            </li>
            <li>
              <Link to='/' className='lead-text link' href="#">Menu</Link>
            </li>
            <li>
              <Link to='/booking' className='lead-text link' href="#">Reservations</Link>
            </li>
            <li>
              <Link to='/' className='lead-text link' href="#">Order Online</Link>
            </li>
            <li>
              <Link to='/' className='lead-text link' href="#">Login</Link>
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
              <a className='lead-text link' href="#">Instagram</a>
            </li>
            <li>
              <a className='lead-text link' href="#">Twitter</a>
            </li>
            <li>
              <a className='lead-text link' href="#">Facebook</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
