import React, { Component } from 'react';
import MainHeader from  '../partials/MainHeader.js';
import HomeBanner from  './Banner';
import InkWork from  './InkWork';
import WhatWeDo from  './WhatWeDo';
import BecomePilotSchool from './BecomeAPilotSchool';
import './HomePage.css';
import {connect} from 'react-redux';

class HomePage extends Component {
	
  	render() {
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


function mapStateToProps(state) {
  	return {
  		settings: state.settings
  	};
}
export default connect(mapStateToProps)(HomePage);