import React from 'react';
import PropTypes from 'prop-types';

export default function CommentCard({ comment }) {

	return (
		<div className="card">
			<div class="card-body">
				<p class="card-text">
					{comment.commentText}<br />
					{comment.author + " > " + comment.posted_date}
				</p>
			</div>
			<div class="card-footer">

			</div>
		</div>
	);
}

CommentCard.propTypes = {
	comment: PropTypes.object.isRequired
}