export const CHECK_NOW_PLAYING = 'CHECK_NOW_PLAYING';
export const GET_NOW_PLAYING = 'GET_NOW_PLAYING';

export const getNowPlaying = (
  songName,
  albumArt,
  artistName,
  albumName,
  releaseDate,
  duration,
) => ({
  type: GET_NOW_PLAYING,
  songName,
  albumArt,
  artistName,
  albumName,
  releaseDate,
  duration,
});

// MIDDLEWARE ACTIONS
export const checkNowPlaying = () => ({
  type: CHECK_NOW_PLAYING,
});
