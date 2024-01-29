import React from 'react'
import Navigation from './Navigation'
import Logo from '../Logo.svg';

function Header() {
  return (
    <header className='container'>
        <img src={Logo} className='logo' alt='Company logo'/>
        <Navigation/>
    </header>
  )
}

export default Header;