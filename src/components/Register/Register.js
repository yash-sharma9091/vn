import React, { Component } from 'react';
import Banner from  './Banner';
import RegisterForm from  './RegisterForm';
import './Register.css';
import ThankYou from '../ThankYou/ThankYou';

class Register extends Component {
	constructor() {
		super();
		this.showThankYouPage = this.showThankYouPage.bind(this);
		this.state = {
			showThankYou: false
		}
	}
  	render() {
  		const {showThankYou} = this.state;
    	return (
     		<div>
        		{!showThankYou && <Banner />}
				{!showThankYou && <RegisterForm showThanks={this.showThankYouPage}/>}
				{showThankYou && <ThankYou />}
      		</div>
    	);
  	}
  	showThankYouPage() {
  		this.setState({showThankYou: true});
  	}
}

export default Register;