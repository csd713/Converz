import React, { Component } from 'react';
import classnames from 'classnames';

class CommentForm extends Component {
	state = {
		commentText: '',
		errors: {}
	};

	handleChange = (evnt) => {
		if (!!this.state.errors[evnt.target.name]) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[evnt.target.name];
			this.setState({
				[evnt.target.name]: evnt.target.value,
				errors: errors
			});
		} else {
			this.setState({ [evnt.target.name]: evnt.target.value });
		}

	};

	handleSubmit = (evnt) => {
		evnt.preventDefault();

		// validation

		let errors = {};
		if (this.state.commentText === '') errors.title = "Ohh! Comment can't be empty!!";

		this.setState({ errors });
	};

	render() {
		return (
			<div className="jumbotron">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group row">
						<div className="col-sm-4 offset-sm-4">
							<input className={classnames('form-control', { errors: !!this.state.errors.title })}
								type="text"
								name="commentText"
								id="commentText"
								value={this.state.commentText}
								onChange={this.handleChange}
								placeholder="Comment here..." />
						</div>
					</div>
					<div>
						<button type="submit"
							className="btn btn-primary">
							Add Comment
						</button>
					</div>
					<span>{this.state.errors.title}</span>
				</form>
			</div>
		);
	};
};

export default CommentForm;