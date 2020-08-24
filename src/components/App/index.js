// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SpotifyWebApi from 'spotify-web-api-js';

// == Import
import './index.scss';

const spotifyApi = new SpotifyWebApi();

// == Composant
const App = ({ nowPlaying, checkNowPlaying }) => {
  const getHashParams = () => {
    const hashParams = {};
    let e = /([^&;=]+)=?([^&;]*)/g;
    const r = /([^&;=]+)=?([^&;]*)/g;
    const q = window.location.hash.substring(1);
    e = r.exec(q);
    while (e) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
      e = r.exec(q);
    }
    return hashParams;
  };

  const params = getHashParams();
  const token = params.access_token;

  let loggedIn = false;
  if (token) {
    spotifyApi.setAccessToken(token);
    loggedIn = true;
  }

  return (
    <div className="App">
      <a href="http://localhost:8888">
        <button className="login-button" type="button">Login to Spotify</button>
      </a>
      <div className="now-playing_song-data">
        <p className="now-playing_song-name">
          Now Playing: {nowPlaying.songName}
        </p>
        <p className="now-playing_song-artist">
          Artist: {nowPlaying.artistName}
        </p>
        <p className="now-playing_song-album">
          Album: {nowPlaying.albumName}
        </p>
        <p className="now-playing_song-date">
          Release date: {nowPlaying.releaseDate}
        </p>
      </div>
      <div className="now-playing_song-cover">
        <img src={nowPlaying.albumArt} alt="album-cover" style={{ height: 150 }} />
      </div>
      { loggedIn && (
        <button type="button" onClick={() => checkNowPlaying()}>
          Check Now Playing
        </button>
      )}
    </div>
  );
};

App.propTypes = {
  nowPlaying: PropTypes.object.isRequired,
  checkNowPlaying: PropTypes.func.isRequired,
};

// == Export
export default App;
