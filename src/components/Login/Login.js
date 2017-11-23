import React, { Component } from 'react';
import Loginform from  './Loginform';
import LeftSidebar from '../partials/LeftSidebar';

class Login extends Component {
  	render() {
    	return (
			<div className="App">
				<div className="d-flex flex-row align-self-stretch no-gutters">
					<div className="col-4"><LeftSidebar /></div>
					<div className="col-8"><Loginform /></div>
				</div>
			</div>
    	);
  	}
}

export default Login;