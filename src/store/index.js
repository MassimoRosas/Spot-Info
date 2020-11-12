import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/index';
import userMiddleware from 'src/middlewares/userMiddleware';
import nowPlayingMiddleware from 'src/middlewares/nowPlayingMiddleware';
import topArtistsMiddleware from 'src/middlewares/topArtistsMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    nowPlayingMiddleware,
    topArtistsMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
