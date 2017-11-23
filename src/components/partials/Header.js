/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
import {removePartials} from '../../lib/Helper';
import {MetaTitle} from '../Common/MetaTitle';
import DashboardHeader from '../partials/DashboardHeader';

class Header extends Component {
    render() {
      	const {location, token} = this.props;
      	return (
        	<div>
	            <MetaTitle location={location}/>
        		<div className="alert alert-danger text-center d-none" style={{marginBottom:0}} id="alert" role="alert">
        			<strong>Network Failure! Make sure you have an active internet connection</strong> 
        		</div>
        		{token 
        			? <DashboardHeader /> 
        			: (	<header>
          					{!_.isEmpty(location) && removePartials(location) && <Logo />}
        				</header>)
        		}
          	</div>
      	);
    }
}

const mapStateToProps = (state) => ({
	location: state.router.location,
	token: state.auth.token
});
export default connect(mapStateToProps, null, null, {pure:false})(Header);