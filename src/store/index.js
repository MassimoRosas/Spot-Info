import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'src/reducers/index';

const store = createStore(
  reducer,
  devToolsEnhancer(),
);

export default store;
