import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from '../components/Register/Register';
import ChangePass from '../components/ChangePass/ChangePass';
<<<<<<< HEAD
import ForgotPass from '../components/ForgotPass/ForgotPass';
import ThankYou from '../components/ThankYou/ThankYou.js';
=======
>>>>>>> 7aa044940501d31ef30297b1429aff520ab59e4f
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Faq from '../components/Faq/Faq';
import NotFound from '../components/404/404';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import NotFound from '../components/NotFound/NotFound';
import {home, join, login, forgotPassword, notFound} from '../lib/SiteLinks';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
<<<<<<< HEAD
		<div>
			<Header {...history}/>
			<Switch>                           
				<Route path="/" exact={true} component={HomePage} />
				<Route path="/join" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/changepass" component={ChangePass} />
				<Route path="/forgotpass" component={ForgotPass} />
				<Route path="/thank-you" component={ThankYou} />
				<Route path="/faq" component={Faq} />
				<Route path="/404" component={NotFound} />
				{/* <Route path="/home" component={HomePage} /> */}
		  	</Switch>
		  	<Footer {...history}/>
		 </div>	 	
=======
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
>>>>>>> 7aa044940501d31ef30297b1429aff520ab59e4f
		</ConnectedRouter>
	);	
}