import { combineReducers } from 'redux';

import userReducer from './user';
import nowPlayingReducer from './nowPlaying';
import topArtistsReducer from './topArtists';

const rootReducer = combineReducers({
  user: userReducer,
  nowPlaying: nowPlayingReducer,
  topArtists: topArtistsReducer,
});

export default rootReducer;
