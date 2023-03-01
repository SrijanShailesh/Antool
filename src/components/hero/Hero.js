import React from 'react';
import './hero.css';

import instagram from '../../assests/instagram_icon.png';
import twitter from '../../assests/twitter_icon.png';
import facebook from '../../assests/facebook_icon.png';
import illustration from '../../assests/Illustration.png'

const Hero = () => {
  return (
    <div className='hero__container'>
      <div className='hero__typography'>
        <p className='hero__typography-heading'>
          Awesome tools for Designer & Developer.
        </p>

        <p className='hero__typography-subheading'>
        Antool is a web collection of information on paid or free Design and Development tools
        </p>

        <div className='hero__typography-search'>
          <form action='' className='search-bar'>
            <input type='search' name='search' placeholder='find more than 430+ tools...'></input>
            <button className='hero__typography-btn'>search</button>
          </form>
        </div>

        <div className='hero__typography-socials'>
          <img src={twitter}></img>
          <img src={facebook}></img>
          <img src={instagram}></img>
        </div>
      </div>

      <div className='hero__illustration'>
        <img src={illustration}></img>
      </div>
    </div>
  )
}

export default Hero