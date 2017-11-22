/* global _ */
import React, { Component } from 'react';
import MainHeader from  '../partials/MainHeader.js';
import HomeBanner from  './Banner';
import InkWork from  './InkWork';
import WhatWeDo from  './WhatWeDo';
import BecomePilotSchool from './BecomeAPilotSchool';
import './HomePage.css';
import {connect} from 'react-redux';
import { FETCH_SITE_SETTINGS } from '../../constant';
import {Loader} from '../Common/Loader';
import InternalServerError from '../Error/InternalServerError'

class HomePage extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: true,
			errorMsg: ''
		}
	}
	componentDidMount()  {
		this.props.dispatch({
			type: FETCH_SITE_SETTINGS,
			callbackError: ({message}) => this.setState({errorMsg:message, isLoading: false}) ,
      		callbackSuccess: () => this.setState({isLoading: false})
		});
	}
  	render() {
  		const { errorMsg} = this.state;
  		if( errorMsg ) {
  			return (<InternalServerError errorMsg={errorMsg}/>)
  		} else {
  			const {banner_img, how_pencilink_works, what_we_do_steps} = this.props.settings;
	    	return (
				<div >
					<MainHeader />
					<HomeBanner banner_img={banner_img}/>
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