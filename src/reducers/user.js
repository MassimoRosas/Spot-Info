import {
  GET_NOW_PLAYING,
} from 'src/actions/user';

const initialState = {
  nowPlaying: {
    songName: 'Not Checked',
    albumArt: '',
    artistName: 'Not Checked',
    albumName: 'Not Checked',
    releaseDate: 'Not Checked',
  },
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: {
          songName: action.songName,
          albumArt: action.albumArt,
          artistName: action.artistName,
          albumName: action.albumName,
          releaseDate: action.releaseDate,
        },
      };
    default: return state;
  }
};
export default userReducer;
