import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from '../components/Register/Register';
import ChangePass from '../components/ChangePass/ChangePass';
import ThankYou from '../components/ThankYou/ThankYou.js';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			<Header/>
			<Switch>                           
				<Route path="/" exact={true} component={HomePage} />
				<Route path="/join" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/changepass" component={ChangePass} />
				<Route path="/thank-you" component={ThankYou} />
				{/* <Route path="/home" component={HomePage} /> */}
		  	</Switch>
		  	<Footer/>
		 </div>	 	
		</ConnectedRouter>
	);	
}