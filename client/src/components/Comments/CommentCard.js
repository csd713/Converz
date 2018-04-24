import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function CommentCard({ comment }) {

	return (
		<div className="card">
			<div className="card-body">
				<p className="card-text">
					{comment.commentText}<br />
					{comment.author + " > " + comment.posted_date}
				</p>
			</div>
			<div className="card-footer">
				<div>
					<Link to={`/edit/${comment._id}`} className="btn btn-primary">Edit</Link>
					<a className="btn btn-danger">Delete</a>
				</div>
			</div>
		</div>
	);
}

CommentCard.propTypes = {
	comment: PropTypes.object.isRequired
}