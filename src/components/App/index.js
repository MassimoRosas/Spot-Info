// == Import npm
import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { Route } from 'react-router-dom';

// == Import
import './index.scss';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import NowPlaying from 'src/containers/NowPlaying';
import TopArtists from 'src/components/TopArtists';

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
    <div className="app">
      <Header isLogged={isLogged} />

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/nowplaying">
        <NowPlaying />
      </Route>

      <Route path="/topartists">
        <TopArtists />
      </Route>
    </div>
  );
};

// == Export
export default App;
