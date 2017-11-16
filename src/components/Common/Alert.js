import React from 'react';
import { Alert } from 'reactstrap';

const AlertNotification = props => {
	const { className, alertMsg, alertVisible } = props;
	if(alertVisible) {
		return(
			<Alert color={className || 'warning'}>
				{alertMsg}
			</Alert>
		);	
	} else {
		return null;
	}
	
}

export default AlertNotification;