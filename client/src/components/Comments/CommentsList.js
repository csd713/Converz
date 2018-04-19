import React from 'react';
import PropTypes from 'prop-types';
//import { getComments } from '../../store/actions/comments';

function CommentsList({ comments }) {
	const emptyMessage = (
		<p>No conversation to display</p>
	);

	const commentsList = (
		<p>Comments List</p>
	);

	return (
		<div>
			{comments.length === 0 ? emptyMessage : commentsList}
		</div>
	);
};

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
//	getComments: PropTypes.func.isRequired
}

export default CommentsList;