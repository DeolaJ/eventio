import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import formError from './error';

export default combineReducers({
  auth,
  event,
  formError,
});
