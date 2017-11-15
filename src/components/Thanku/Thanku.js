import React, { Component } from 'react';
import ThankuForm from  './ThankuForm';
import Logo from  '../Logo/Logo';
import './Thanku.css';

class Thanku extends Component {
  	render() {
    	return (
            <div className="thanku-panel">
                <div className="thanku-header">
				    <Logo />
                </div>
                <div className="thanku-group">
                    <ThankuForm />
                </div>
            </div>
    	);
  	}
}

export default Thanku;