import { combineReducers } from 'redux';
import { todoReducer } from './slices';

export default combineReducers({
  todo: todoReducer,
});
