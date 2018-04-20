import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveComment } from '../../store/actions/comments';
import { Redirect } from 'react-router-dom';


class CommentForm extends Component {
	state = {
		commentText: '',
		errors: {},
		loading: false,
		done: false
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

		const isValid = Object.keys(errors).length === 0;

		if (isValid) {
			const { commentText } = this.state;
			this.setState({ loading: true });
			this.props.saveComment({ commentText }).then(
				() => { this.setState({ done: true }) },
				(err) => err.response.json().then(({ errors }) => this.setState({ errors, loading: false }))
			);
		}
	};

	render() {

		const Form = (
			<form className={classnames("form", { loading: this.state.loading })}
				onSubmit={this.handleSubmit}>
				{!!this.state.errors.global && <div className="error"><p>{this.state.errors.global}</p></div>}
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
		);
		return (
			<div className="jumbotron">
				<Form />
			</div>
		);
	};
};

// const dispatchToProps = (dispatch) => ({
// 	saveComment: () => dispatch(saveComment())
// })

// first argument is null
// because we don't need to get any data from global app state
//second arg is object of actions
export default connect(null, { saveComment })(CommentForm);