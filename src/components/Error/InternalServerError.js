import React, { Component } from 'react';
import Banner from  './404Banner';
import InternalErrorContent from  './InternalErrorContent';
import './404.css';

class InternalServerError extends Component {
  	render() {
    	return (
			<div>
				<Banner />
				<InternalErrorContent {...this.props}/>
			</div>
    	);
  	}
}

export default InternalServerError;