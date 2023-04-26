import React from 'react';
import { NavLink } from 'react-router-dom';
import { GiMoonOrbit } from 'react-icons/gi';

const Navbar = () => (
  <nav>
    <NavLink className="logo" to="/">
      <GiMoonOrbit className="logo-img" />
      Space Travelers Hub
      {' '}
    </NavLink>
    {' '}
    <ul className="navbar">
      <li>
        <NavLink className="nav-link" to="/rockets">
          Rockets
          {' '}
        </NavLink>
        {' '}
      </li>
      {' '}
      <li>
        <NavLink className="nav-link" to="/missions">
          Missions
          {' '}
        </NavLink>
        {' '}
      </li>
      {' '}
      <span className="separator"> | </span>
      {' '}
      <li>
        <NavLink className="nav-link" to="/myprofile">
          My Profile
          {' '}
        </NavLink>
        {' '}
      </li>
      {' '}
    </ul>
    {' '}
  </nav>
);

export default Navbar;
