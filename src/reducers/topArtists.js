import {
  GET_TOP_ARTISTS,
} from 'src/actions/topArtists';

const initialState = {
  topArtists: [],
};

const topArtistsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TOP_ARTISTS:
      return {
        ...state,
        topArtists: action.topArtists,
      };
    default: return state;
  }
};
export default topArtistsReducer;
