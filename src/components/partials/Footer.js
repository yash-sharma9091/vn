/* global _ */
import React, { Component } from 'react';
import facebookIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import linkedinIcon from '../../assets/images/svg/linkedin-logo.svg';
import { connect } from 'react-redux';
import {CopyRightText} from './CopyRightText';
import {removePartials} from '../../lib/Helper';
import {LinkContainer} from 'react-router-bootstrap';
class Footer extends Component {
	constructor() {
		super();
		this.state = {
			cms_content:[],
			footer:{}
		}
	}
	componentWillReceiveProps() {
		const {settings} = this.props;
		console.log(settings);
		/*if( settings ) {
			const {cms_content, footer} = settings;
			console.log('settings', settings);
			this.setState({cms_content, footer});
		}*/
	}
  	render() {
  		const {location, settings} = this.props;
  		const {cms_content, footer} = this.state;
  		if(!_.isEmpty(location) && removePartials(location) ) {
	    	return (
	     		<div className="App">
	        		<footer className="padding-10">
						<div className="container">
							<div className="d-flex justify-content-between align-items-center">
								<div className="footer-links">
									{cms_content && cms_content.length > 0 && cms_content.map((val, index) => <LinkContainer key={index} to={val.slug}><button type="button" className="btn btn-link">{val.title}</button></LinkContainer>) }
								</div>
								<div className="share-links">
									<ul>
									 	<li><a className="pointer"><img src={facebookIcon} alt="Facebook"/></a></li>
										<li><a className="pointer"><img src={googleIcon} alt="Google"/></a></li>
										<li><a className="pointer"><img src={twiiterIcon} alt="Twitter"/></a></li>
										<li><a className="pointer"><img src={linkedinIcon} alt="linkedin"/></a></li>
									</ul>
								</div>
								<div>
									<div className="copyright-tag text-uppercase"><CopyRightText /></div>
								</div>
							</div>
						</div>
					</footer>
	      		</div>
	    	);
	    } else {
	    	return null;
	    }	
  	}
}
const mapStateToProps = (state) => {
	console.log(state);
	return ({
		location: state.router.location,
		settings: state.settings
	});
}	
export default connect(mapStateToProps)(Footer);