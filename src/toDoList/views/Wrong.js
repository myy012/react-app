import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/img/logo.svg';
import LayOut from 'common/components/Layout';
import '../assets/css/App.css';

class App extends Component {
	render() {
		return (
			<LayOut>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">404页面</h1>
					</header>
				</div>
			</LayOut>
		);
	}
}

export default connect()(App);
