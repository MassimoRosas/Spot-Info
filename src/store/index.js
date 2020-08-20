import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from 'src/reducers/index';
import userMiddleware from 'src/middlewares/userMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
