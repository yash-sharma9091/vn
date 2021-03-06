/* global IMAGE_PATH */
import React, { Component } from 'react';
import {loadImage} from '../../lib/Helper';
import './HomePage.css';

class HomeBanner extends Component {
	constructor() {
		super();
		this.renderImage = this.renderImage.bind(this);
		this.state = {
			bannerImg: {}
		}
	}
	componentDidMount() {
		this.renderImage(this.props);

	}
	renderImage(props) {
		const {banner_img, thumb} = props; let bannerImg = {};
		
		if( thumb ) {
			bannerImg = {
				backgroundImage: 'url(' + (IMAGE_PATH + '/' + thumb.path) + ')'
			}	
			this.setState({bannerImg});
		}
		if ( banner_img ) {
			let url = (IMAGE_PATH + '/' + banner_img.path);
			loadImage(url)
			.then(res => {
				bannerImg = {
					backgroundImage: 'url(' + res + ')',
					transition: 'opacity 0.3s linear'
				}
				this.setState({bannerImg});
			})
		}
	}
	componentWillReceiveProps(props) {
		this.renderImage(props);
	}
  	render() {
  		const {bannerImg} = this.state; 
    	return (
			<div className="homeBanner" style={bannerImg}>
				<div className="homeBanner-tags text-center color-white">
					<h2 className="text-uppercase">Virtual teaching and <br /> learning in the classroom.</h2>
					<button type="button" className="btn btn-link text-uppercase color-white link-button see-pilot-link pointer">See Pilot Program Process</button>
				</div>	
			</div>
    	);
  	}
}

export default HomeBanner;