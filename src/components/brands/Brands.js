import React from 'react';
import './brands.css'

import {microsoft,google,slack,wordpress} from '../../assests';

const Brands = () => {
  return (
    <div className='brand__container'>
      <p>Trusted by more than 150+ brands</p>
      <div className='brand__container-logos'>
        <img src={microsoft} alt='microsoft'></img>
        <img src={google} alt = 'google'></img>
        <img src={slack} alt = 'slack'></img>
        <img src={wordpress} alt = 'wordpress'></img>
      </div>
    </div>
  )
}

export default Brands