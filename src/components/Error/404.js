import React, { Component } from 'react';
import Banner from  './404Banner';
import Content from  './404Content';
import './404.css';

class NotFound extends Component {
  	render() {
    	return (
			<div className="App">
				<Banner />
				<Content />
			</div>
    	);
  	}
}

export default NotFound;