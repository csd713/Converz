import React, { Component, PropTypes } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import * as commentsActions from '../actions/commentsAction'


class AddComment extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			comment: { commentText: "", author: "CSD", posted_date: null }
		};

		this.onClickSaveComment = this.onClickSaveComment.bind(this);
		this.onCommentChange = this.onCommentChange.bind(this);
	}

	onCommentChange(event) {
		const comment = this.state.comment;
		comment.commentText = event.target.value;
		this.setState({ comment: comment });
	}

	onClickSaveComment() {
		//fire off an action using dispatch
		this.props.dispatch(commentsActions.createComment(this.state.comment));
	}

	commentRow(comment, index) {
		return <div key={index}>{comment.commentText}</div>
	}

	render() {
		return (
			<div>
				<h2>Add Comment</h2>
				<input
					type="text"
					onChange={this.onCommentChange}
					value={this.state.comment.commentText} />

				<input
					type="submit"
					onChange={this.onCommentChange}
					value="Add Comment"
					onClick={this.onClickSaveComment} />

				{this.props.comments.map(this.commentRow)}
			</div>
		);
	}
}

AddComment.propTypes = {
	dispatch: PropTypes.func.isRequired,
	comments: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		comments: state.comments
	}
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(AddComment);