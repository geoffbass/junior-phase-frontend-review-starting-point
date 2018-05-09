import { applyMiddleware, createStore } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(
    loggingMiddleware,
    thunkMiddleware
  ))
);
