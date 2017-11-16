import React, { Component } from 'react';
import './HomePage.css';

class HomeBanner extends Component {
  	render() {
    	return (
			<div className="homeBanner">
				<div className="homeBanner-tags text-center color-white">
					<h2 className="text-uppercase">Virtual teaching and <br /> learning in the classroom.</h2>
					<button type="button" className="btn btn-link text-uppercase color-white link-button pointer">See Pilot Program Process</button>
				</div>	
			</div>
    	);
  	}
}

export default HomeBanner;