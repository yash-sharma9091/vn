import React, { Component } from 'react';
import FaqBanner from  './FaqBanner';
import FaqTabs from './FaqTabs';
import MainHeader from  '../partials/MainHeader.js';
import './Faq.css';

class Faq extends Component {
  	render() {
    	return (
			<div className="App">
				<MainHeader />
				<FaqBanner />
				<FaqTabs {...this.props}/>
			</div>
    	);
  	}
}

export default Faq;