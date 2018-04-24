import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import store from './store';
import Comments from './components/Comments/CommentsPage';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CommentFormPage from './components/Comments/CommentFormPage';

class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<Provider store={store}>
					<div className="App">
						<header className="App-header">
							<Link to="/">
								<img src={logo} className="App-logo" alt="logo" />
								<h1 className="App-title">Converzation</h1></Link>
						</header>
						<Route path="/edit/:_id" component={CommentFormPage} />
						<Comments />
					</div>
				</Provider>
			</BrowserRouter>
		)
	}
}

export default App
