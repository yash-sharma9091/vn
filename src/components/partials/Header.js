/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
import {removePartials} from '../../lib/Helper';
import {MetaTitle} from '../Common/MetaTitle';

class Header extends Component {
    render() {
      	const {location} = this.props;
      	return (
        	<div>
	            <MetaTitle location={location}/>
        		<div className="alert alert-danger text-center d-none" style={{marginBottom:0}} id="alert" role="alert">
        			<strong>Network Failure! Make sure you have an active internet connection</strong> 
        		</div>
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