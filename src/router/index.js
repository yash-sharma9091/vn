import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Home from '../components/Home';
import Register from '../components/Register/Register';
import ChangePass from '../components/ChangePass/ChangePass';
import Login from '../components/Login/Login';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
		<div>
			 {/* <Header/>  */}
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<Route path="/signup" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/changepass" component={ChangePass} />
		  	</Switch>
		  	{/* <Footer/> */}
		 </div>	 	
		</ConnectedRouter>
	);	
}