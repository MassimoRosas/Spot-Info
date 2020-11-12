export const CHECK_TOP_ARTISTS = 'CHECK_TOP_ARTISTS';
export const GET_TOP_ARTISTS = 'GET_TOP_ARTISTS';

export const getTopArtists = (topArtists) => ({
  type: GET_TOP_ARTISTS,
  topArtists,
});

export const checkTopArtists = () => ({
  type: CHECK_TOP_ARTISTS,
});
