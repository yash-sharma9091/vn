import React, { Component } from 'react';
import facebookIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import linkedinIcon from '../../assets/images/svg/linkedin-logo.svg';

class Footer extends Component {
  	render() {
    	return (
     		<ul>
                <li><a className="pointer"><img src={facebookIcon} alt="Facebook"/></a></li>
                <li><a className="pointer"><img src={googleIcon} alt="Google"/></a></li>
                <li><a className="pointer"><img src={twiiterIcon} alt="Twitter"/></a></li>
                <li><a className="pointer"><img src={linkedinIcon} alt="linkedin"/></a></li>
            </ul>
        )
	}
}

export default Footer;