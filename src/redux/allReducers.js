import {combineReducers} from 'redux';
import counterReducer from './reducers/counterReducer';

const allReducers = combineReducers({
  counter: counterReducer,
});
export default allReducers;
