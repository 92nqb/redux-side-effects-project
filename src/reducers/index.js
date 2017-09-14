
import { combineReducers } from 'redux-loop';
import { appReducer } from './app';

export default combineReducers({
  app: appReducer,
});
