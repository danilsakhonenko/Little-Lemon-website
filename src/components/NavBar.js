import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav id='main-nav'>
        <ul>
            <li><Link to='/' className='title-text link'>Home</Link></li>
            <li><Link to='/' className='title-text link'>About</Link></li>
            <li><Link to='/' className='title-text link'>Menu</Link></li>
            <li><Link to='/booking' className='title-text link'>Reservations</Link></li>
            <li><Link to='/' className='title-text link'>Order Online</Link></li>
            <li><Link to='/' className='title-text link'>Login</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar;