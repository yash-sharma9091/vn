/* global _ */
import React, { Component } from 'react';
import './LeftSidebar.css';
import { connect } from 'react-redux';
import {SocialLinks} from './SocialLinks';
import {CMSLinks} from './CMSLinks';
import {loadImage} from '../../lib/Helper';
import loginBg from '../../assets/images/login-bg.png';

class LeftSidebar extends Component {
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
		const {settings} = this.props;
		const {bannerImg} = this.state;
    	return (
     		<div className="login-side" style={bannerImg}>
				<div className="login-tags color-white">
			<h2 className="text-uppercase ">Free yourself to teach while <br /> we handle the classroom data.</h2>
				</div>
				<div className="login-bottom">
					<div className="share-links">
						{!_.isEmpty(settings) && <SocialLinks settings={settings} type="dark"/>}
					</div>
					<div className="footer-links">
						{!_.isEmpty(settings) && <CMSLinks settings={settings} />}
					</div>
				</div>
      		</div>
    	);
  	}
}

const mapStateToProps = (state) => {
	return ({
		settings: state.settings
	});
}	
export default connect(mapStateToProps)(LeftSidebar);