import React, { Component } from 'react';
//import DashboardHeader from '../partials/DashboardHeader';

import SchoolStepTabs from './SchoolStepTabs.js';
import './SchoolStep.css';

class SchoolStep extends Component {
	render() {
		return (
			<SchoolStepTabs {...this.props}/>
		);
	}
}

export default SchoolStep; 