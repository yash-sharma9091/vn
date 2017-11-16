import React, { Component } from 'react';
import MainHeader from  '../partials/MainHeader.js';
import HomeBanner from  './Banner';
import InkWork from  './InkWork';
import WhatWeDo from  './WhatWeDo';
import BecomePilotSchool from './BecomeAPilotSchool';
import './HomePage.css';

class HomePage extends Component {
  	render() {
    	return (
			<div className="App">
				<MainHeader />
				<HomeBanner />
				<InkWork />
				<WhatWeDo />
				<BecomePilotSchool />
			</div>
    	);
  	}
}

export default HomePage;