import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getComments } from '../../store/actions/comments';
import './comments.css';
import CommentsList from './CommentsList';
import CommentForm from './CommentForm'

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
