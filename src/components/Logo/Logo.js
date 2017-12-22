/* global IMAGE_PATH */
import React, { Component } from 'react';
import BeforeLogoBox from '../../assets/images/logo-box.png';
import AfterLogoBox from '../../assets/images/logo-box-white.png';
import BeforeLogoIcon from '../../assets/images/logo.png';
import AfterLogoIcon from '../../assets/images/logo-white.png';
import './Logo.css';
import {Link} from 'react-router-dom';
import {home, dashboard} from '../../lib/SiteLinks';
import {connect} from 'react-redux';

class Logo extends Component {
  	render() {  	
  		const {token} = this.props;
  		
  		if( token ) {
  			
  			/*let schoolLogo = "";
  			if( user.school_logo ) {
  				schoolLogo = `${IMAGE_PATH}/${user.school_logo.path}`;	
  			}*/
	    	return (
				<div className="LogoBox text-center">
					<img src={AfterLogoBox} alt={AfterLogoBox}/>
					<Link to={dashboard}>
						<img src={AfterLogoIcon} alt={AfterLogoIcon}/>
					</Link>
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