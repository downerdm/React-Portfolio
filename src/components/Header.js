import React from 'react';
import PortPic from '../assets/images/SchoolPic.JPG';
import './header.css';

export default function Header() {
  return (
    <div className="header">
      <img className="profilePic" src={PortPic} alt="" />
      <h1>Dennis M. Downer</h1>
      {/* <h5>Address: 3817 Chatham Drive, Doraville, GA 30340</h5>
      <h5>Phone Number: (404) 433-2268</h5> */}
      </div>
  );
}
