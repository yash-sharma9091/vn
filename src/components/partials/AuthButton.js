import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import {join, login} from '../../lib/SiteLinks';
import {LinkContainer} from 'react-router-bootstrap';
//import {connect} from 'react-redux';
//import {AUTH_LOGOUT_REQUEST} from '../../constant';
//import {push} from 'react-router-redux';

class AuthButton extends Component {
	render() {
		/*const {token} = this.props;
		if( token ) {
			return (
				<Nav className="mr-auto" navbar>
				    <NavItem>
				        <LinkContainer to={dashboard}>
				            <NavLink className="text-uppercase" >Dashboard</NavLink>
				        </LinkContainer>
				    </NavItem>
				    <NavItem className="active">
				        <NavLink onClick={() => this.logout()} className="text-uppercase">Logout</NavLink>
				    </NavItem>
				</Nav>
			)
		} else {*/
			return (
				<Nav className="mr-auto" navbar>
				    <NavItem className="blue-active pr-2">
				        <LinkContainer to={join}>
				            <NavLink className="text-uppercase" >Join Pilot Program Free</NavLink>
				        </LinkContainer>
				    </NavItem>
				    <NavItem className="active">
				        <LinkContainer to={login}>
				            <NavLink className="text-uppercase">Login</NavLink>
				        </LinkContainer>    
				    </NavItem>
				</Nav>
			)
		//}	
	}
	/*logout() {
		const { dispatch } = this.props;
	  	return new Promise((resolve, reject) => {
	    	dispatch({
	      		type: AUTH_LOGOUT_REQUEST,
	      		callbackSuccess: () => {
	        		dispatch(push('/'));
	        		resolve();
	      		}
	    	})
	  	});
	}*/
}

/*const mapStateToProps = (state) => {
	return ({
		token: state.auth.token
	})
}
export default connect(mapStateToProps)(AuthButton);*/
export default AuthButton;