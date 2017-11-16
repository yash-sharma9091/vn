import React, { Component } from 'react';
import LogoBox from '../../assets/images/logo-box.png';
import LogoIcon from '../../assets/images/logo.png';
import './Logo.css';
import {Link} from 'react-router-dom';

class Logo extends Component {
  	render() {  	
    	return (
			<div className="LogoBox text-center">
				<img src={LogoBox} alt={LogoBox}/>
				<Link to="/"><img src={LogoIcon} alt={LogoIcon}/></Link>
            </div>
    	);
  	}
}

export default Logo;