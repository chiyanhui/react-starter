import React from 'react';
import './Hello.scss';
import redPng from '@/assets/colors/red.png';

function Hello() {
  return (
    <div className="Hello">
      <span>Hello world from React!</span>
      <img src={redPng} />
    </div>
  )
}

export default Hello;
