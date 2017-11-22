/* global IMAGE_PATH */
import React, { Component } from 'react';
import './HomePage.css';

class HomeBanner extends Component {
	constructor() {
		super();
		this.state = {
			bannerImg: {}
		}
	}
	loadImage(src) {
		return new Promise((resolve, reject) => {
			const image = new Image();
			image.onload = () => resolve(src);
			image.onerror = err => reject(err);
			image.src = src;
		});
	}
	componentWillReceiveProps() {
		const {banner_img} = this.props; let bannerImg = {};
		
		if ( banner_img ) {
			let url = (IMAGE_PATH + '/' + banner_img[0].path);
			this.loadImage(url)
			.then(res => {
				bannerImg = {
					backgroundImage: 'url(' + res + ')',
					transition: 'opacity 0.3s linear'
				}
				this.setState({bannerImg});
			})
		}
	}
  	render() {
  		const {bannerImg} = this.state;
    	return (
			<div className="homeBanner" style={bannerImg}>
				<div className="homeBanner-tags text-center color-white">
					<h2 className="text-uppercase">Virtual teaching and <br /> learning in the classroom.</h2>
					<button type="button" className="btn btn-link text-uppercase color-white link-button pointer">See Pilot Program Process</button>
				</div>	
			</div>
    	);
  	}
}

export default HomeBanner;