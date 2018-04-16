import { combinedReducers } from 'react-redux';
import comments from './commentReducer';

const rootReducer = combinedReducers({
	comments: comments
});

export default rootReducer;