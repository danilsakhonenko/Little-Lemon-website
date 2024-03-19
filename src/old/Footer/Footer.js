import React from "react";
import Logo from "../../assets/images/logo.svg";
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <img src={Logo} className="logo" alt="Company logo"/>
      <section>
        <h3 className='title-text'>Doormat Navigation</h3>
        <nav>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active' className='lead-text link' href="#">Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeClassName='active' className='lead-text link' href="#">About</NavLink>
            </li>
            <li>
              <NavLink to='menu' activeClassName='active' className='lead-text link' href="#">Menu</NavLink>
            </li>
            <li>
              <NavLink to='/booking' activeClassName='active' className='lead-text link' href="#">Reservations</NavLink>
            </li>
            <li>
              <NavLink to='/order' activeClassName='active' className='lead-text link' href="#">Order Online</NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName='active' className='lead-text link' href="#">Login</NavLink>
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
              <a className='lead-text link' href="/">Instagram</a>
            </li>
            <li>
              <a className='lead-text link' href="/">Twitter</a>
            </li>
            <li>
              <a className='lead-text link' href="/">Facebook</a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
