import { combineReducers } from 'redux';

import nowPlayingReducer from './nowPlaying';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
  nowPlaying: nowPlayingReducer,
});

export default rootReducer;
