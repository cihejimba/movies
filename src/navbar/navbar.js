import React from 'react';
import {Button} from '@blueprintjs/core';
import './navbar.css';

export const Navbar = () => (
  <nav className="pt-navbar pt-fixed-top" id="navbar">
    <div className="pt-navbar-group pt-align-left">
      <a className="pt-navbar-heading" href="/">Movies</a>
    </div>
    <div className="pt-navbar-group pt-align-right">
      <Button className="pt-button pt-minimal pt-icon-cog" />
    </div>
  </nav>
);

export default Navbar;
