import { combineReducers } from 'redux';
import consumerReducer from './consumerReducer';

export default combineReducers({
  consumers: consumerReducer
});