import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getComments, deleteComment } from '../../store/actions/comments';
import './comments.css';
import CommentsList from './CommentsList';
import CommentFormPage from './CommentFormPage'

class CommentsPage extends Component {

	componentDidMount() {
		this.props.getComments();
	}

	render() {
		return (
			<div>
				<h2>Add new Comment</h2>
				<CommentFormPage />
				<h3>Comments List</h3>
				<CommentsList comments={this.props.comments} deleteComment={deleteComment}/>
			</div>
		);
	}
}

CommentsPage.propTypes = {
	comments: PropTypes.array.isRequired,
	getComments: PropTypes.func.isRequired,
	deleteComment: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return {
		comments: state.comments
	};
}

// const dispatchToProps = (dispatch) => ({
// 	getComments: () => dispatch(getComments())
// })

export default connect(mapStateToProps, { getComments, deleteComment })(CommentsPage);
