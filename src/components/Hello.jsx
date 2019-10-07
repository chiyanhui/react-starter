import React from 'react';
import './Hello.css';
import redPng from '@/assets/colors/red.png';

function Hello() {
  return (
    <div className="Hello">
      Hello world from React!
      <img src={redPng} />
    </div>
  )
}

export default Hello;
