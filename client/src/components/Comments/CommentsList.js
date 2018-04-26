import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';
//import { getComments } from '../../store/actions/comments';


function CommentsList({ comments, deleteComment }) {
	const emptyMessage = (
		<p>No conversation to display</p>
	);

	const commentsList = (
		<div>
			{comments.map(comment => <CommentCard
				comment={comment}
				key={comment._id}
				deleteComment={deleteComment} />)}
		</div>
	);

	return (
		<div>
			{comments.length === 0 ? emptyMessage : commentsList}
		</div>
	);
};

CommentsList.propTypes = {
	comments: PropTypes.array.isRequired,
	deleteComment: PropTypes.func.isRequired
}

export default CommentsList;