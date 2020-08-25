// == Import npm
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

// == Import
import './index.scss';
import NowPlaying from 'src/containers/NowPlaying';

const spotifyApi = new SpotifyWebApi();

// == Composant
const App = () => {
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

  let isLogged = false;
  if (token) {
    spotifyApi.setAccessToken(token);
    isLogged = true;
  }

  return (
    <div className="App">
      {!isLogged && (
        <a href="http://localhost:8888">
          <button className="login-button" type="button">Login to Spotify</button>
        </a>
      )}
      <NowPlaying />
    </div>
  );
};

// == Export
export default App;
