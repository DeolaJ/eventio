import { combineReducers } from 'redux';
import auth from './auth';
import user from './auth';

export default combineReducers({
  auth,
  user,
});
