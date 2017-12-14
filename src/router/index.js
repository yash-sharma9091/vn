import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Register from '../components/Register/Register';
//import ChangePass from '../components/ChangePass/ChangePass';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import ForgotPass from '../components/ForgotPass/ForgotPass';
//import ThankYou from '../components/ThankYou/ThankYou.js';
import HomePage from '../components/HomePage/HomePage';
import Login from '../components/Login/Login';
import Faq from '../components/Faq/Faq';
import Dashboard from '../components/Dashboard/Dashboard';
import AddTeachers from '../components/AddTeachers/AddTeachers';
import EditTeacherDetail from '../components/EditTeacherDetail/EditTeacherDetail';
import EditStudentDetail from '../components/EditStudentDetail/EditStudentDetail';
import TeacherDetail from '../components/TeacherDetail/TeacherDetail';
import AddStudent from '../components/AddStudent/AddStudent';
import SchoolStep from '../components/BuildSchoolStep/SchoolStep';
import NotFound from '../components/Error/404';
import Invalid from '../components/Error/Invalid';
import Header from '../components/partials/Header';
import Footer from '../components/partials/Footer';
import PrivateRoute from './PrivateRoute';
import BeforeAuthRoute from './BeforeAuthRoute';
import {
	home, 
	join, 
	login, 
	forgotPassword, 
	resetPassword, 
	notFound, 
	invalid, 
	dashboard,
	teacherListing,
	addStudent,
	teacherDetail,
	editTeacher,
	editStudent,
	faq, 
	//schoolstep
} from '../lib/SiteLinks';
export const Router = props => {
	const { history } = props;
	
	return (
		<ConnectedRouter history={history}>
			<div>
				<Header />
				<Switch>                           
					<BeforeAuthRoute path={home} exact={true} component={HomePage} />
					<BeforeAuthRoute path={join} component={Register} />
					<BeforeAuthRoute path={login} component={Login} />
					<BeforeAuthRoute path={forgotPassword} component={ForgotPass} />
					<BeforeAuthRoute path={resetPassword} component={ResetPassword} />
					<PrivateRoute path={dashboard} component={Dashboard} />
					<PrivateRoute path={teacherListing} component={AddTeachers} />
					<PrivateRoute path={teacherDetail} component={TeacherDetail} />
					<PrivateRoute path={addStudent} component={AddStudent} />
					<PrivateRoute path={editTeacher} component={EditTeacherDetail} />
					<PrivateRoute path={editStudent} component={EditStudentDetail} />
					<Route path={faq} component={Faq} />
					{/*<PrivateRoute path={schoolstep} component={SchoolStep} />*/}
					<Route path={invalid} component={Invalid} />
					<Route path={notFound} component={NotFound} />
			  	</Switch>
			  	<Footer />
			 </div>	 	
		</ConnectedRouter>
	);	
}