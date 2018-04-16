import React, { Component } from 'react';
import Comments from './components/CommentsPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to Converz</h1>
				</header>
				<Comments />
			</div>
		);
	}
}

export default App;