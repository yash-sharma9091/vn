import React, { Component } from 'react';
import LeftSidebar from '../partials/LeftSidebar';
import ForgotPassForm from  './ForgotPassForm';


class ForgotPass extends Component {
  	render() {
    	return (
			<div className="App">
				<div className="d-flex flex-row align-self-stretch no-gutters">
					<div className="col-4"><LeftSidebar /></div>
					<div className="col-8"><ForgotPassForm /></div>
				</div>
			</div>
    	);
  	}
}

export default ForgotPass;





