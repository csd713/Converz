import { GET_COMMENTS } from './constants';

export const getComments = () => dispatch => {
	return fetch('/api/comments')
		.then(res => res.json())
		.then(comments => dispatch({ type: GET_COMMENTS, payload: comments }))
}