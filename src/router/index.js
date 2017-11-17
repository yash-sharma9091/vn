import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from '../components/Register/Register';
import ChangePass from '../components/ChangePass/ChangePass';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import NotFound from '../components/NotFound/NotFound';
import {home, join, login, forgotPassword, notFound} from '../lib/SiteLinks';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
			<div>
				<Header />
					<Switch>                           
						<Route path={home} exact={true} component={HomePage} />
						<Route path={join} component={Register} />
						<Route path={login} component={Login} />
						<Route path={forgotPassword} component={ChangePass} />
						<Route path={notFound} component={NotFound} />
				  	</Switch>
			  	<Footer />
			 </div>	 	
		</ConnectedRouter>
	);	
}