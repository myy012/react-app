import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class App extends Component {
	render() {
		// 改变title
		return (
			<div>
				<Helmet>
					<title>{this.props.title || 'React'}</title>
				</Helmet>
                {this.props.children}
			</div>
		);
	}
}

export default App;
