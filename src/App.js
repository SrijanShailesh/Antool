import React from 'react';
import {Navbar,Hero,Contributor,Footer,Newcomers,Testimony,Tools,Brands} from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Header'>
      <Navbar/>
      <Hero/>
      </div>
      <Contributor/>
      <Brands/>
      <Tools/>
      <Newcomers/>
      <Testimony/>
      <Footer/>
    </div>
  )
}

export default App