import React, { Component } from 'react';
import LeftSidebar from '../partials/LeftSidebar';
import ResetPasswordForm from  './ResetPasswordForm';

class ChangePass extends Component {
  	render() {
    	return (
			<div className="App">
				<div className="d-flex flex-row align-self-stretch no-gutters">
					<div className="col-4"><LeftSidebar /></div>
					<div className="col-8"><ResetPasswordForm {...this.props}/></div>
				</div>
			</div>
    	);
  	}
}

export default ChangePass;





