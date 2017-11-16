/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
import {exportPath} from '../Common/MatchComponent';
class Header extends Component {
  	render() {
    	return (
     		<div>
				<header>
					{!_.isEmpty(this.props) && exportPath(this.props) !== 'login' && <Logo />}
				</header>
        		{/* <Link to="signup">Pilot Form</Link> */}
      		</div>
    	);
  	}
}


export default connect(null, null, null, {pure:false})(Header);