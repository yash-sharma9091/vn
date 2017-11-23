/* global moment, _ */
import React from 'react';
export const CopyRightText = ({settings}) => {
	const {footer} = settings;
	if( !_.isEmpty(footer) ) {
		return (<div className="copyright-tag text-uppercase">© {moment().format('Y')} {footer.copyright_text}</div>)
	}
	return null;
}