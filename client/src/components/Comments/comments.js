import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getComments } from '../../store/actions/comments';
import './comments.css';

class Comments extends Component {

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
				<ul>
					{this.props.comments.map(comment =>
						<li key={comment.id}>{comment.posted_date + ": " + comment.commentText} {" - " + comment.author}</li>
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

export default connect(mapStateToProps, dispatchToProps)(Comments);
