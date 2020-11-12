import SpotifyWebApi from 'spotify-web-api-js';

import {
  CHECK_USER_DATA,
  getUserData,
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
    case CHECK_USER_DATA: {
      spotifyApi.getMe(token)
        .then((response) => {
          store.dispatch(getUserData(
            response.country,
            response.display_name,
            response.email,
            response.followers,
            response.images[0].url,
            response.product,
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
