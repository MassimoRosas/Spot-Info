import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ isLogged }) => (
  <header className="header">
    {!isLogged && (
      <a href="http://localhost:8888">
        <button className="login-button" type="button">Login to Spotify</button>
      </a>
    )}
    {isLogged && (
    <>
      <div className="header-user">
        User data
      </div>
      <nav className="header-nav">
        <NavLink to="/" exact className="header-nav-item" activeClassName="header-nav-item-active">
          Home
        </NavLink>
        <NavLink to="/nowplaying" className="header-nav-item" activeClassName="header-nav-item-active">
          Now Playing
        </NavLink>
      </nav>
    </>
    )}
  </header>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
