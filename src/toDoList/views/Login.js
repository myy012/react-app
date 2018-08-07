import React, { Component } from 'react';
import { connect } from 'react-redux';
import LayOut from 'common/components/Layout';
import logo from 'toDoList/assets/img/logo.svg';
import 'toDoList/assets/css/App.css';

class App extends Component {
	render() {
		const info = this.props.info.get('agreementId');
		return (
            <LayOut title="child">
				<div>
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">欢迎来到子页面</h1>
					</header>
					<p className="App-intro">
						开始编辑代码吧<code>src/Child.js</code>编辑之后，重新刷新.
					</p>
					<div>
						{info}
					</div>
				</div>
			</LayOut>
		);
	}
}

const mapStateToProps = (state) => ({
	info: state.get('service')
});

export default connect(mapStateToProps, undefined, undefined, {pure:false})(App);
