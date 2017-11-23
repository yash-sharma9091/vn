/* global _ */
import React from 'react';
import {SocialIcons} from './SocialIcons';
export const SocialLinks = (props) => {
	const {social_links} = props.settings;
	if( !_.isEmpty(social_links) ) {
		return (
			<ul>
				{social_links.map((val, index) => <li key={index}><a href={val.url} target="_blank" className="pointer"><img src={SocialIcons(val.title, props.type)} alt={val.title}/></a></li>)}
			</ul>
		)
	}
	return null
}