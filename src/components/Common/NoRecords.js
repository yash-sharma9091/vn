import React from 'react';
import List from '../../assets/images/svg/list.svg';

const NoRecords = ({imageIcon, displayMessage}) => {
	return (
        <div className="text-center no-faqs">
			<img src={imageIcon || List} alt="records"/>
			<h5>{displayMessage || 'No data available yet!'} </h5>
		</div>
	)
}

export default NoRecords;