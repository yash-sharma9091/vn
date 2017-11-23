/* global _ */
import React, { Component } from 'react';
import './LeftSidebar.css';
import { connect } from 'react-redux';
import {SocialLinks} from './SocialLinks';
import {CMSLinks} from './CMSLinks';
import {CopyRightText} from './CopyRightText';
import { FETCH_SITE_SETTINGS } from '../../constant';
import InternalServerError from '../Error/InternalServerError';
import {loadImage} from '../../lib/Helper';
import loginBg from '../../assets/images/login-bg.png';

class LeftSidebar extends Component {
	constructor() {
		super();
		this.state = {
			errorMsg: '',
			bannerImg: {}
		}
	}
	componentDidMount()  {
		this.props.dispatch({
			type: FETCH_SITE_SETTINGS,
			callbackError: ({message}) => this.setState({errorMsg:message}),
      		callbackSuccess: () => console.log('Site settings fetched successfully')
		});

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
  		const { errorMsg, bannerImg} = this.state;
  		if( errorMsg ) {
  			return (<InternalServerError errorMsg={errorMsg}/>)
  		} else {
  			const {settings} = this.props;
	    	return (
	     		<div className="login-side" style={bannerImg}>
					<div className="login-tags color-white">
						<h2 className="text-uppercase">Lorem ipsum dolor sit amet</h2>
						<div className="text-uppercase tag-line">Free yourself to teach while <br /> we handle the classroom data.</div>
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
}

const mapStateToProps = (state) => {
	return ({
		settings: state.settings
	});
}	
export default connect(mapStateToProps)(LeftSidebar);