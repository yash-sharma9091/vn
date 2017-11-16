import React, { Component } from 'react';
import LogoBox from '../../assets/images/logo-box.png';
import LogoIcon from '../../assets/images/logo.png';
import './Logo.css';

class Logo extends Component {
  	render() {  	
    	return (
			<div className="LogoBox text-center">
				<img src={LogoBox} alt={LogoBox}/>
				<a><img src={LogoIcon} alt={LogoIcon}/></a>
            </div>
    	);
  	}
}

export default Logo;