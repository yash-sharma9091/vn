/* global _ */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logo from  '../Logo/Logo';
import {removePartials} from '../../lib/Helper';
import {MetaTitle} from '../Common/MetaTitle';
import DashboardHeader from '../partials/DashboardHeader';
import { FETCH_SITE_SETTINGS } from '../../constant';
import InternalServerError from '../Error/InternalServerError';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			errorMsg: ''
		}
	}
	componentDidMount()  {
		this.props.dispatch({
			type: FETCH_SITE_SETTINGS,
			callbackError: ({message}) => this.setState({errorMsg:message}),
      		callbackSuccess: () => this.setState({errorMsg: ''})
		});
	}
    render() {
      	const {location, token} = this.props;
      	const { errorMsg} = this.state;
      	if( errorMsg ) {
  			return (<InternalServerError errorMsg={errorMsg}/>)
  		} else {
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
}

const mapStateToProps = (state) => ({
	location: state.router.location,
	token: state.auth.token
});
export default connect(mapStateToProps, null, null, {pure:false})(Header);