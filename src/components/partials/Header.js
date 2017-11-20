/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
import {removePartials} from '../../lib/Helper';
class Header extends Component {
    render() {
      const {location} = this.props;
      	return (
        	<div>
        		<header>
          			{!_.isEmpty(location) && removePartials(location) && <Logo />}
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