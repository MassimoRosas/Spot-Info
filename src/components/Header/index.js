import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ isLogged, checkUserData, user }) => {
  useEffect(() => {
    checkUserData();
  }, []);

  return (
    <header className="header">
      {!isLogged && (
        <a href="http://localhost:8888">
          <button className="login-button" type="button">Login to Spotify</button>
        </a>
      )}
      {isLogged && (
      <>
        <div className="header-user">
          <img className="header-user-avatar" src={user.avatar} alt="user avatar" />
          <div className="header-user-data">
            <h2 className="header-user-name">{user.displayName}</h2>
            <p className="header-user-email">{user.email}</p>
            <p className="header-user-country">Country: {user.country}</p>
            <p className="header-user-status">Status: {user.product}</p>
          </div>

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
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  checkUserData: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default Header;
