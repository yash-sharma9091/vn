/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
//import {exportPath} from '../Common/MatchComponent';
import {forgotPassword, login} from '../../lib/SiteLinks';
class Header extends Component {
  	render() {
  		const {location} = this.props;

    	return (
     		<div>
				<header>
					{!_.isEmpty(location) && ![login, forgotPassword].includes(location.pathname) && <Logo />}
				</header>
        		{/* <Link to="signup">Pilot Form</Link> */}
      		</div>
    	);
  	}
}

const mapStateToProps = (state) => ({
	location: state.router.location
});
export default connect(mapStateToProps, null, null, {pure:false})(Header);