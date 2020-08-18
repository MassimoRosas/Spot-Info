// == Import npm
import React, { Component } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

// == Import
import './index.scss';

const spotifyApi = new SpotifyWebApi();

// == Composant
class App extends Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
    };
  }

  getHashParams = () => {
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
  }

  getNowPlaying = () => {
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.name,
            albumArt: response.item.album.images[0].url,
          },
        });
      });
  }

  render() {
    const { nowPlaying, loggedIn } = this.state;
    return (
      <div className="App">
        <a href="http://localhost:8888">
          <button className="login-button" type="button">Login to Spotify</button>
        </a>
        <div>
          Now Playing: {nowPlaying.name}
        </div>
        <div>
          <img src={nowPlaying.albumArt} alt="album-cover" style={{ height: 150 }} />
        </div>
        { loggedIn && (
          <button type="button" onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        )}
      </div>
    );
  }
}

// == Export
export default App;
