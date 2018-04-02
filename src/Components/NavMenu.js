import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenu = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to='/search/Guitars'>Guitars</NavLink></li>
        <li><NavLink to='/search/Family'>Family</NavLink></li>
        <li><NavLink to='/search/Code'>Code</NavLink></li>
      </ul>
    </nav>
  );
}

export default NavMenu;
