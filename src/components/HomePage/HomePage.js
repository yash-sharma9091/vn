import React, { Component } from 'react';
import MainHeader from  '../partials/MainHeader.js';
import HomeBanner from  './Banner';
import InkWork from  './InkWork';
import WhatWeDo from  './WhatWeDo';
import BecomePilotSchool from './BecomeAPilotSchool';
import './HomePage.css';
import {connect} from 'react-redux';
import { FETCH_SITE_SETTINGS } from '../../constant';
import InternalServerError from '../Error/InternalServerError';

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			errorMsg: ''
		}
	}
	componentDidMount()  {
		this.props.dispatch({
			type: FETCH_SITE_SETTINGS,
			callbackError: ({message}) => this.setState({errorMsg:message}) ,
      		callbackSuccess: () => this.setState({errorMsg: ''})
		});
	}
  	render() {
  		const { errorMsg} = this.state;
  		if( errorMsg ) {
  			return (<InternalServerError errorMsg={errorMsg}/>)
  		} else {
  			const {banner_img, how_pencilink_works, what_we_do_steps, thumb} = this.props.settings;
	    	return (
				<div >
					<MainHeader />
					<HomeBanner banner_img={banner_img} thumb={thumb}/>
					<InkWork how_pencilink_works={how_pencilink_works}/>
					<WhatWeDo what_we_do_steps={what_we_do_steps}/>
					<BecomePilotSchool />
				</div>
	    	);
	    } 	
  	}
}


function mapStateToProps(state) {
  	return {
  		settings: state.settings
  	};
}
export default connect(mapStateToProps)(HomePage);