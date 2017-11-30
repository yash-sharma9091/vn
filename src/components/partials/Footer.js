/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CopyRightText from './CopyRightText';
import {removePartials} from '../../lib/Helper';
import {CMSLinks} from './CMSLinks';
import {SocialLinks} from './SocialLinks';
class Footer extends Component {
  	render() {
  		const {location, settings} = this.props;
  		if(!_.isEmpty(location) && removePartials(location) ) {
	    	return (
        		<footer className="padding-10">
					<div className="container">
						<div className="d-flex justify-content-between align-items-center">
							<div className="footer-links">
								{!_.isEmpty(settings) && <CMSLinks settings={settings} />}
							</div>
							<div className="share-links">
								{!_.isEmpty(settings) && <SocialLinks settings={settings} type="light" />}
							</div>
							<div>
								{!_.isEmpty(settings) && <CopyRightText />}
							</div>
						</div>
					</div>
				</footer>
	    	);
	    } else {
	    	return null;
	    }	
  	}
}
const mapStateToProps = (state) => {
	return ({
		location: state.router.location,
		settings: state.settings
	});
}	
export default connect(mapStateToProps)(Footer);