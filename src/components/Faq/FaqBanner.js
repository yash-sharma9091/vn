import React, { Component } from 'react';
import './Faq.css';
import {loadImage} from '../../lib/Helper';
import loginBg from '../../assets/images/faq-banner.png';

class Banner extends Component {
	constructor() {
		super();
		this.state = {
			bannerImg: {}
		}
	}
	componentDidMount()  {
		loadImage(loginBg)
		.then(res => {
			let bannerImg = {
				backgroundImage: 'url(' + res + ')',
				transition: 'opacity 0.3s linear'
			}
			this.setState({bannerImg});
		});
		
	}
  	render() {
  		const { bannerImg} = this.state;
    	return (
        	<div className="faq-banner" style={bannerImg}></div>
    	);
  	}
}

export default Banner;