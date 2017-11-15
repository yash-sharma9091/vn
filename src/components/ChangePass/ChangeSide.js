import React, { Component } from 'react';
import facebookIcon from '../../assets/images/svg/facebook-logo2.svg';
import googleIcon from '../../assets/images/svg/google-plus-logo2.svg';
import twiiterIcon from '../../assets/images/svg/twitter-logo2.svg';
import linkedinIcon from '../../assets/images/svg/linkedin.svg';
import './Change.css';

class Changeside extends Component {
  	render() {
    	return (
     		<div className="login-side">
				<div className="login-tags color-white">
					<h2 className="text-uppercase">Lorem ipsum dolor sit amet</h2>
					<div className="text-uppercase tag-line">Free yourself to teach while <br /> we handle the classroom data.</div>
				</div>
				<div className="login-bottom">
					<div className="share-links">
						<ul>
							<li><a className="pointer"><img src={facebookIcon} alt="Facebook"/></a></li>
							<li><a className="pointer"><img src={googleIcon} alt="Google"/></a></li>
							<li><a className="pointer"><img src={twiiterIcon} alt="Twitter"/></a></li>
							<li><a className="pointer"><img src={linkedinIcon} alt="linkedin"/></a></li>
						</ul>
					</div>
					<div className="footer-links">
						<button type="button" className="btn btn-link">Privacy Policy</button>
						<button type="button" className="btn btn-link">Terms &amp; Conditions</button>
					</div>
				</div>
      		</div>
    	);
  	}
}

export default Changeside;