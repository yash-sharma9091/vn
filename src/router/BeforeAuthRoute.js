import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const BeforeAuthRoute = ({ component: Component, ...rest }) => {
	
	const {token} = rest;
	return (
	  <Route {...rest} render={props => (
	    token ? (
	      	<Redirect to={{
	      		pathname: '/dashboard', 
	      		state: { from: props.location }
	      	}}/>
	    ) : (
	     	<Component {...props}/>
	    )
	  )}/>
	);
}

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(BeforeAuthRoute);