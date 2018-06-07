import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayOut from '../../common/components/Layout';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css';

class App extends Component {
	render() {
		const info = this.props.info.get('agreementId');
		return (
			<LayOut title="child">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to child</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<div>
					{info}
				</div>
			</LayOut>
		);
	}
}

const mapStateToProps = (state) => ({
	info: state.get('service')
});

export default connect(mapStateToProps, undefined, undefined, {pure:false})(App);
