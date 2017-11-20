import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from '../components/Register/Register';
import ChangePass from '../components/ChangePass/ChangePass';
import ForgotPass from '../components/ForgotPass/ForgotPass';
import ThankYou from '../components/ThankYou/ThankYou.js';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Faq from '../components/Faq/Faq';
import NotFound from '../components/404/404';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import {home, join, login, forgotPassword, notFound, faq} from '../lib/SiteLinks';
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
						<Route path={forgotPassword} component={ForgotPass} />
						<Route path={notFound} component={NotFound} />
						<Route path={faq} component={Faq} />
				  	</Switch>
			  	<Footer />
			 </div>	 	
		</ConnectedRouter>
	);	
}