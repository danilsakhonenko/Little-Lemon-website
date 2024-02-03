import React from 'react'
import NavBar from './NavBar'
import Logo from '../images/logo.svg';

function Header() {
  return (
    <header className='container'>
        <img src={Logo} className='logo' alt='Company logo'/>
        <NavBar/>
    </header>
  )
}

export default Header;