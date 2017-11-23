/* global _ */
import React from 'react';
import {Link} from 'react-router-dom';
import facebookIcon from '../../assets/images/svg/facebook-letter-logo.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo-silhouette.svg';
import linkedinIcon from '../../assets/images/svg/linkedin-logo.svg';
import noIcon from '../../assets/images/svg/no-camera.svg';

const getSocialIcons = (title) => {
	switch (title) {
		case 'facebook': {
			return facebookIcon
		}
		case 'google': {
			return googleIcon
		}
		case 'linkedin': {
			return linkedinIcon
		}
		case 'twitter': {
			return twiiterIcon
		}
		default:
			return noIcon
	}
}

export const SocialLinks = ({settings}) => {
	const {footer} = settings;
	if( !_.isEmpty(footer) ) {
		return (
			<ul>
				{footer.social_links.map((val, index) => <li key={index}><a href={val.url} target="_blank" className="pointer"><img src={getSocialIcons(val.title)} alt="socialIcons"/></a></li>)}
			</ul>
		)
	}
	return null
}