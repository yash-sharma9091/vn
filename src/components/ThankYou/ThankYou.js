import React, { Component } from 'react';
import ThankYouForm from  './ThankYouForm.js';
import Logo from  '../Logo/Logo';
import './ThankYou.css';

class ThankYou extends Component {
  	render() {
    	return (
            <div className="thanku-panel">
                <div className="thanku-header">
				    <Logo />
                </div>
                <div className="thanku-group">
                    <ThankYouForm />
                </div>
            </div>
    	);
  	}
}

export default ThankYou;