import React from 'react';
import {Button} from '@blueprintjs/core';
import './navbar.css';

export const Navbar = () => (
  <nav className="pt-navbar pt-fixed-top" id="navbar">
    <div className="pt-navbar-group">
      <a className="pt-navbar-heading" href="/">Movies</a>
    </div>
    <span></span>
    <div className="pt-navbar-group">
      <div className="pt-input-group">
        <span className="pt-icon pt-icon-search"></span>
        <input className="pt-input" type="search" placeholder="Search movies" dir="auto" />
      </div>
    </div>
    <span></span>
    <div className="pt-navbar-group">
      <Button className="pt-button pt-minimal pt-icon-cog" />
    </div>
  </nav>
);

export default Navbar;
