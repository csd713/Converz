import React from 'react';
import { connect } from 'react-redux';
import { saveComment, getSingleComment, updateComment } from '../../store/actions/comments';
import CommentForm from './CommentForm';
import { Redirect } from 'react-router-dom';

class CommentFormPage extends React.Component {
	state = {
		redirect: false
	}
	componentDidMount = () => {
		const {match} = this.props;
		if (match.params._id) {
			this.props.getSingleComment(match.params._id);
		}
	}

	saveComment = ({ _id, commentText }) => {
		if (_id) {
			return this.props.updateComment({ _id, commentText }).then(
				() => { this.setState({ redirect: true }) },
			);
		} else {
			return this.props.saveComment({ commentText }).then(
				() => { this.setState({ redirect: true }) },
			);
		}
	}

	render() {
		return (
			<div>
				<CommentForm comment={this.props.comment}
					saveComment={this.saveComment} />
			</div>
		);
	}
}

// first argument is null
// because we don't need to get any data from global app state
//second arg is object of actions

function mapStateToProps(state, props) {
	const {match} = props;
	if (match.params._id) {
		return {
			comment: state.comments.find(item => item._id === match.params._id)
		};
	}
	return {
		comment: null
	}
}

export default connect(mapStateToProps, { saveComment, getSingleComment, updateComment })(CommentFormPage);