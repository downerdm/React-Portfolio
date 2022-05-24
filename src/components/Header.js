import React from 'react';
import PortPic from '../assets/images/SchoolPic.JPG';
import '../../src/assets/css/header.css';

export default function Header() {
  return (
    <div className="header">
      <img className="profilePic" src={PortPic} alt="" />
      <h1>Dennis M. Downer</h1>
      </div>
  );
}
