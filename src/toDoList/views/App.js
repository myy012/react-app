import React, { Component } from 'react';
import {
	HashRouter as Router,
	Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import { push} from 'react-router-redux';
import LayOut from 'common/components/Layout';
import { ServiceActions } from 'toDoList/redux/test';
import logo from 'toDoList/assets/img/logo.svg';
import temImg from 'toDoList/assets/img/test.jpg'
import 'toDoList/assets/css/App.css';
import 'toDolist/assets/css/temLess.less';
import 'toDolist/assets/css/temStyl.styl';

class Home extends Component {
	buildARequest() {
		this.props.dispatch(ServiceActions.getServiceInfo({id: 53}));
	}
	jumpChild() {
		this.props.dispatch(push('/child'));
	}
	render() {
		console.log('这枚简单123');
		const info = this.props.info.get('agreementId');
		return (
			<LayOut title="app" className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<img src={require('toDoList/assets/img/test.jpg')} className="big" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p className="App-intro" onClick={this.buildARequest.bind(this)}>
					build a request
				</p>
				<div>
					{info}这样挺好的
				</div>
				<Link to="/child">Child</Link>
				<p onClick={this.jumpChild.bind(this)}>redux child</p>
			</LayOut>
		);
	}
}
const mapStateToProps = (state) => ({
	info: state.get('service')
});
export default connect(mapStateToProps, undefined, undefined, {pure:false})(Home);

