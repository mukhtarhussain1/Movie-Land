import React from 'react'
import useLocalStorage from 'use-local-storage';


import './Navbar.css';

const Navbar = () => {

  return (
      
    <div className='navbar'>
        <div className='logo'>
            <h1><a href='#'>MovieLand</a></h1>
        </div>
        <div className='menu'>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Trending</a></li>
                <li><a href='#'>Browse Movies</a></li>
                <li><a href='#'>Music</a></li>
                <li><a href='#'>Login | Register</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar