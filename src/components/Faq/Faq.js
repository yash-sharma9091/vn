import React, { Component } from 'react';
import FaqBanner from  './FaqBanner';
import FaqTabs from './FaqTabs';
import './Faq.css';

class Faq extends Component {
  	render() {
    	return (
			<div className="App">
				<FaqBanner />
				<FaqTabs {...this.props}/>
			</div>
    	);
  	}
}

export default Faq;