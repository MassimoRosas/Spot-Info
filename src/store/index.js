import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/index';
import nowPlayingMiddleware from 'src/middlewares/nowPlayingMiddleware';
import userMiddleware from 'src/middlewares/userMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    nowPlayingMiddleware,
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
