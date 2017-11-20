import React, { Component } from 'react';
import ChangeSide from  './ChangeSide';
import ChangeForm from  './ChangePassForm';
import './Change.css';

class ChangePass extends Component {
  	render() {
    	return (
			<div className="App">
				<div className="d-flex flex-row align-self-stretch no-gutters">
					<div className="col-4"><ChangeSide /></div>
					<div className="col-8"><ChangeForm /></div>
				</div>
			</div>
    	);
  	}
}

export default ChangePass;





