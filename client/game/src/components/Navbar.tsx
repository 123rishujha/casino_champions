import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar= () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <Link to='/register'><li><button className="navButton">Sign Up</button></li></Link>
        <Link to='/login'><li><button className="navButton" >Sign In</button></li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
