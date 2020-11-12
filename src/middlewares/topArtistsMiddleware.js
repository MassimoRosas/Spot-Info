import SpotifyWebApi from 'spotify-web-api-js';
import {
  CHECK_TOP_ARTISTS,
  getTopArtists,
} from 'src/actions/topArtists';

const spotifyApi = new SpotifyWebApi();

const topArtistsMiddleware = (store) => (next) => (action) => {
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
    case CHECK_TOP_ARTISTS: {
      spotifyApi.getMyTopArtists(token)
        .then((response) => {
          store.dispatch(getTopArtists(
            response.items,
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
export default topArtistsMiddleware;
