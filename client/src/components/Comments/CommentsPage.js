import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getComments } from '../../store/actions/comments';
import './comments.css';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm'

/*
class CommentsPage extends Component {

	constructor() {
		super();
		this.addComment = this.addComment.bind(this);
		this.state = {
			comments: []
		}
	}

	addComment(event) {
		event.preventDefault();
		let commentText = this.refs.commentText.value
		console.log(commentText);
		let comment = {
			commentText,
			author: "CSD",
			posted_date: Date.now()
		}

		let comments = this.state.comments;

		comments.push(comment);

		this.setState({
			comments: comments
		})

		this.refs.commentForm.reset();

	}
	static propTypes = {
		getComments: PropTypes.func.isRequired,
		comments: PropTypes.array.isRequired
	}

	static defaultProps = {
		comments: []
	}

	componentWillMount() {
		this.props.getComments();
	}

	render() {

		return (
			<div>
				<h2>Comments</h2>
				<form ref="commentForm">
					<input type="text" ref="commentText" placeholder="Add your comment" />
					<button onClick={this.addComment}>Comment</button>
				</form>
				<ul>
					{this.props.comments.map(comment =>
						<li key={comment._id}>{comment.posted_date + ": " + comment.commentText} {" - " + comment.author}</li>
					)}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	comments: state.comments
})

const dispatchToProps = (dispatch) => ({
	getComments: () => dispatch(getComments())
})

export default connect(mapStateToProps, dispatchToProps)(CommentsPage);
*/

class CommentsPage extends Component {

	componentDidMount() {
		this.props.getComments();
	}

	render() {
		return (
			<div>
				<h2>Add new Comment</h2>
				<CommentForm />
				<h3>Comments List</h3>
				<CommentsList comments={this.props.comments} />
			</div>
		);
	}
}

CommentsPage.propTypes = {
	comments: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
}

const dispatchToProps = (dispatch) => ({
	getComments: () => dispatch(getComments())
})

export default connect(mapStateToProps, dispatchToProps)(CommentsPage);
