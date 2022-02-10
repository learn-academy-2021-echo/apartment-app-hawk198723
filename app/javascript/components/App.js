import React, { Component } from 'react';

class App extends Component {
	render() {
		const { logged_in, current_user, new_user_route, sign_in_route, sign_out_route } = this.props;
		return <h1>Hi</h1>;
	}
}

export default App;
