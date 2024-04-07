import React from 'react'
import NavBar from './NavBar/NavBar'
import Logo from '../../assets/images/logo.svg';
import styles from './Header.module.css'

function Header() {
  return (
    <header className={`${styles.header} container`}>
        <img src={Logo} className='logo' alt='Company logo'/>
        <NavBar/>
    </header>
  )
}

export default Header;