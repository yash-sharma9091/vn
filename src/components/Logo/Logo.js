import React, { Component } from 'react';
import BeforeLogoBox from '../../assets/images/logo-box.png';
import AfterLogoBox from '../../assets/images/logo-box-white.png';
import BeforeLogoIcon from '../../assets/images/logo.png';
import AfterLogoIcon from '../../assets/images/logo-white.png';
import './Logo.css';
import {Link} from 'react-router-dom';
import {home} from '../../lib/SiteLinks';
import {connect} from 'react-redux';

class Logo extends Component {
  	render() {  	
  		const {token} = this.props;
  		if( token ) {
	    	return (
				<div className="LogoBox text-center">
					<img src={AfterLogoBox} alt={AfterLogoBox}/>
					<Link to={home}><img src={AfterLogoIcon} alt={AfterLogoIcon}/></Link>
	            </div>
	    	);
	    } else {
	    	return (
				<div className="LogoBox text-center">
					<img src={BeforeLogoBox} alt={BeforeLogoBox}/>
					<Link to={home}><img src={BeforeLogoIcon} alt={BeforeLogoIcon}/></Link>
	            </div>
	    	);
	    }	
  	}
}
const mapStateToProps = (state) => ({
	token: state.auth.token
})
export default connect(mapStateToProps)(Logo);