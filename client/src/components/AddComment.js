import React, { Component } from 'react';
import '../App.css';

class AddComment extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			comment: {commentText: "", author: "CSD", posted_date: null}
		};

		this.onClickAddComment = this.onClickAddComment.bind(this);
		this.onCommentChange = this.onCommentChange.bind(this);
	}

	onCommentChange(event){
		const comment = this.state.comment;
		comment.commentText = event.target.value;
		this.setState({comment: comment});
	}

	onClickAddComment(){
		alert(`Adding comment ${this.state.comment.commentText}`);
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
					onClick={this.onClickAddComment} />
			</div>
		);
	}
}

export default AddComment;