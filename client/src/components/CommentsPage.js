import React, { Component } from 'react';
import '../App.css';
import AddComment from './AddComment';

class Comments extends Component {
	constructor() {
		super();
		this.state = {
			comments: []
		};
	}

	//runs automatically when component is mounted
	componentDidMount() {
		fetch('/comment')
			.then(res => res.json())
			.then(comments => this.setState({ comments }, () => console.log('Comments fetched.. ', comments)));
	}

	render() {
		return (
			<div>
				<h2>Comments</h2>
				<AddComment />
				<ul>
					{this.state.comments.map(comment =>
						<li key={comment.id}>{comment.commentText} {comment.author} {comment.posted_date}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Comments;