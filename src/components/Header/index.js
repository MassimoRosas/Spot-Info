import React from 'react';
import PropTypes from 'prop-types';

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
      <div className="header-nav">
        <ul className="header-nav-list">
          <li className="header-nav-list-element">Home</li>
          <li className="header-nav-list-element">Now Playing</li>
        </ul>
      </div>
    </>
    )}
  </header>
);

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
