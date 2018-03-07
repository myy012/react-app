import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { push} from 'react-router-redux';
import { ServiceActions } from '../redux/test';
import logo from '../assets/img/logo.svg';
import '../assets/css/App.css'

class Home extends Component {
	buildARequest() {
		this.props.dispatch(ServiceActions.getServiceInfo({id: 53}));
	}
	jumpChild() {
		this.props.dispatch(push('/child'));
	}
	render() {
		console.log(this);
		const info = this.props.info.get('agreementId');
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p className="App-intro" onClick={this.buildARequest.bind(this)}>
					build a request
				</p>
				<div>
					{info}
				</div>
				<Link to="/child">Child</Link>
				<p onClick={this.jumpChild.bind(this)}>redux child</p>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	info: state.get('service')
});
export default connect(mapStateToProps, undefined, undefined, {pure:false})(Home);
