import React from 'react'
import Navigation from './Navigation'
import Logo from '../Logo.svg';

function Header() {
  return (
    <header>
        <img src={Logo} alt='Company logo' width="250"/>
        <Navigation/>
    </header>
  )
}

export default Header;