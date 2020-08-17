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
    console.log(params);
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
    let hashParams = {};
    const str = window.location.href;
    const url = new URL(str);
    hashParams = new URLSearchParams(url.search);
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
