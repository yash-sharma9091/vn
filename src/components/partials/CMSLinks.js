import React from 'react';
import {Link} from 'react-router-dom';

export const CMSLinks = ({settings}) => {
	const {cms_content} = settings;
	if( cms_content.length > 0 ) {
		//return cms_content.map((val, index) => <Link key={index} to={`/cms/${val.slug}`} className="btn btn-link">{val.title}</Link>) 
		return cms_content.map((val, index) => <Link key={index} to={''} className="btn btn-link text-capitalize">{val.title}</Link>) 
	}
	return null
}