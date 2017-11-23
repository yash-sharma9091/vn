import React from 'react';
export const Loader = ({type}) => (
	<div className="loader-main">
		<div className={`loader ${type === 'small' ? 'loader-small': 'loader-default'}`}>Loading ...</div>
	</div>
);