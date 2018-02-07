import React, { Component } from 'react';
import './Register.css';
import {loadImage} from '../../lib/Helper';
import loginBg from '../../assets/images/profile-banner.png';

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
    		<div className="Banner" style={bannerImg}>
				<div className="Banner-tags text-center color-white">
					<h2 className="text-uppercase">Become A Pilot School</h2>
				</div>	
			</div>
    	);
  	}
}

export default Banner;