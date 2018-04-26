import { GET_COMMENTS, GET_COMMENT, SAVE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from './constants';

export const getComments = () => dispatch => {
	return fetch('/api/comments')
		.then(res => res.json())
		.then(comments => dispatch({ type: GET_COMMENTS, payload: comments }))
}

export const saveComment = (data) => {
	return dispatch => {
		return fetch('/api/comments', {
			method: 'post',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(comments => dispatch({ type: SAVE_COMMENT, payload: comments }))
	};
}

function handleResponse(response) {
	if (response.ok) {
		return response.json();
	} else {
		let error = new Error(response.statusText);
		error.response = response;
		throw error;
	}
}

export function getSingleComment(id) {
	return dispatch => {
		fetch(`/api/comments/${id}`)
			.then(res => res.json())
			.then(comment => dispatch({ type: GET_COMMENT, payload: comment }))
	}
}

export const updateComment = (data) => {
	return dispatch => {
		return fetch(`/api/comments/${data._id}`, {
			method: 'put',
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(id => dispatch({ type: UPDATE_COMMENT, payload: id }))
	};
}

export const deleteComment = (id) => {
	return dispatch => {
		return fetch(`/api/comments/${id}`, {
			method: 'delete',
			headers: {
				"Content-Type": "application/json"
			}
		}).then(handleResponse)
			.then(comment => dispatch({ type: DELETE_COMMENT, payload: comment }))
	};
}