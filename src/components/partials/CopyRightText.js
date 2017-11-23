/* global moment, _ */
import React from 'react';
import { connect } from 'react-redux';
const CopyRightText = ({settings}) => {
	const {copyright_text} = settings;
	if( !_.isEmpty(copyright_text) ) {
		return (<div className="copyright-tag text-uppercase">© {moment().format('Y')} {copyright_text}</div>)
	}
	return null;
}

const mapStateToProps = (state) => {
	return ({
		settings: state.settings
	});
}	
export default connect(mapStateToProps)(CopyRightText);
