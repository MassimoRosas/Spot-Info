import SpotifyWebApi from 'spotify-web-api-js';

import {
  CHECK_NOW_PLAYING,
  getNowPlaying,
} from 'src/actions/user';

const spotifyApi = new SpotifyWebApi();

const userMiddleware = (store) => (next) => (action) => {
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
  if (token) {
    spotifyApi.setAccessToken(token);
  }

  switch (action.type) {
    case CHECK_NOW_PLAYING: {
      spotifyApi.getMyCurrentPlaybackState(token)
        .then((response) => {
          console.log(response);
          store.dispatch(getNowPlaying(
            response.item.name,
            response.item.album.images[0].url,
            response.item.artists[0].name,
            response.item.album.name,
            response.item.album.release_date,
          ));
        })
        .catch((error) => {
          console.warn(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};
export default userMiddleware;
