import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-menu'>
            <ul>
                <li><a href='#'>HomeLand - All rights reserved</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Browse Movies</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </div>
        <div className='icons'>
          <a href='#'><i class='fab fa-google'></i></a>
          <a href='#'><i class='fab fa-facebook-square'></i></a>
          <a href='#'><i class='fab fa-twitter'></i></a>
          <a href='#'><i class='fab fa-instagram'></i></a>
          <a href='#'><i class='fab fa-youtube'></i></a>
        </div>
        <div>
          <p>By using this site you agree with the terms and conditions.</p>
        </div>
    </div>
  )
}

export default Footer