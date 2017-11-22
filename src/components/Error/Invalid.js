import React, { Component } from 'react';
import Banner from  './404Banner';
import InvalidContent from  './InvalidContent';
import './404.css';

class Invalid extends Component {
  	render() {
    	return (
			<div>
				<Banner />
				<InvalidContent />
			</div>
    	);
  	}
}

export default Invalid;