/* global _ */
import React, { Component } from 'react';
import facebookIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import linkedinIcon from '../../assets/images/svg/linkedin-logo.svg';
import {exportPath} from '../Common/MatchComponent';
import { connect } from 'react-redux';
import {CopyRightText} from './CopyRightText';
class Footer extends Component {
  	render() {
  		const {location} = this.props;
  		if(!_.isEmpty(location) && !['login', 'thankyou'].includes(exportPath(location.pathname)) ) {
	    	return (
	     		<div className="App">
	        		<footer className="padding-10">
						<div className="container">
							<div className="d-flex justify-content-between align-items-center">
								 <div className="footer-links">
									 <button type="button" className="btn btn-link">Privacy Policy</button>
									 <button type="button" className="btn btn-link">Terms &amp; Conditions</button>
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
const mapStateToProps = (state) => ({
	location: state.router.location
});
export default connect(mapStateToProps)(Footer);