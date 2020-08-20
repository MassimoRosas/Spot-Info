export const CHECK_NOW_PLAYING = 'CHECK_NOW_PLAYING';
export const GET_NOW_PLAYING = 'GET_NOW_PLAYING';

export const getNowPlaying = (name, albumArt) => ({
  type: GET_NOW_PLAYING,
  name,
  albumArt,
});

// MIDDLEWARE ACTIONS
export const checkNowPlaying = () => ({
  type: CHECK_NOW_PLAYING,
});
