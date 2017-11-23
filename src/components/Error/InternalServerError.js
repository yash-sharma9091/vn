import React, { Component } from 'react';
import Banner from  './404Banner';
import InternalErrorContent from  './InternalErrorContent';
import './404.css';
import {MetaTitle} from '../Common/MetaTitle';

class InternalServerError extends Component {
  	render() {
    	return (
			<div>
				<Banner />
				<MetaTitle location={ {pathname:'/500'} }/>
				<InternalErrorContent {...this.props}/>
			</div>
    	);
  	}
}

export default InternalServerError;