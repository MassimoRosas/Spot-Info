import {
  GET_NOW_PLAYING,
} from 'src/actions/user';

const initialState = {
  nowPlaying: { name: 'Not Checked', albumArt: '' },
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_NOW_PLAYING:
      return {
        ...state,
        nowPlaying: {
          name: action.name,
          albumArt: action.albumArt,
        },
      };
    default: return state;
  }
};
export default userReducer;
