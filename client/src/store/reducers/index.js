import { combineReducers } from 'redux';
import commentReducer from './comment';

export default combineReducers({
	comments: commentReducer
});
