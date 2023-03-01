import React from 'react';
import './navbar.css';

import logo from '../../assests/logo.png';

function Navbar() {
  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <img src={logo} /><p>Antools.</p>
      </div>

      <div className='navbar__links'>
         <p><a href='#home'>home</a></p>
         <p><a href='#categories'>categories</a></p>
         <p><a href='#mycollections'>my collections</a></p>
         <p><a href='#blog'>blog</a></p>
      </div>

      <div className='navbar__log'>
        <button className='navbar__log-btn'><p>login</p></button>
      </div>

      <div className='navbar__sign'>
        <button className='navbar__sign-btn'>sign up</button>
      </div>
    </div>
  );
}

export default Navbar