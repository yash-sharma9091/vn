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
import StudentDashboard from '../components/Dashboard/StudentDashboard';


import Wrapper from '../components/Wrapper/Wrapper';

import EditTeacherDetail from '../components/EditTeacherDetail/EditTeacherDetail';
import EditStudentDetail from '../components/EditStudentDetail/EditStudentDetail';
import EditParentDetail from '../components/Parents/EditParentDetail';
import TeacherDetail from '../components/TeacherDetail/TeacherDetail';
import StudentDetail from '../components/StudentDetail/StudentDetail';
import ParentDetail from '../components/Parents/ParentDetail';
import SchoolProfile from '../components/SchoolProfile/SchoolProfile';
import SchoolAdminDashboard from '../components/SchoolAdminDashboard/SchoolAdminDashboard';

import LessonPlan from '../components/LessonPlan/LessonPlan';
import LessonPlanNew from '../components/LessonPlanNew/LessonPlanNew';
import LessonPlanList from '../components/LessonPlanList/LessonPlanList';
import LessonPlanDetails from '../components/LessonPlanDetails/LessonPlanDetails';
import LessonPlanResponse from '../components/LessonPlanResponse/LessonPlanResponse';

import ParentListings from '../components/ParentsDetails/ParentsDetails';
import CreateGroup from '../components/CreateGroup/CreateGroup';



// import SchoolStep from '../components/BuildSchoolStep/SchoolStep';
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
	studentDashboard,
	teacherListing,
	studentListing,
	ClassListing,
	AddClass,
	teacherDetail,
	studentDetail,
	parentDetail,
	schoolProfile,
	schoolAdminDashboard,
	editTeacher,
	editStudent,
	parentListing,
	faq, 
	editSchoolProfile,
	editParent,
	lessonPlan,
	lessonPlanNew,
	lessonPlanList,
	lessonPlanDetails,
	lessonPlanResponse,
	createGroup
	//thanks
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
					{/*<BeforeAuthRoute path={thanks} component={ThankYou} />*/}
					<PrivateRoute path={dashboard} component={Dashboard} />
					<PrivateRoute path={studentDashboard} component={StudentDashboard} />
					<PrivateRoute path={teacherListing} component={Wrapper} />
					<PrivateRoute path={ClassListing} component={Wrapper} />
					<PrivateRoute path={teacherDetail} component={TeacherDetail} />
					<PrivateRoute path={studentDetail} component={StudentDetail} />
					<PrivateRoute path={parentDetail} component={ParentDetail} />
					<PrivateRoute path={schoolProfile} component={SchoolProfile} />
					<PrivateRoute path={schoolAdminDashboard} component={SchoolAdminDashboard} />
					<PrivateRoute path={editSchoolProfile} component={SchoolProfile} />
					<PrivateRoute path={studentListing} component={Wrapper} />
					<PrivateRoute path={editTeacher} component={EditTeacherDetail} />
					<PrivateRoute path={editStudent} component={EditStudentDetail} />
					<PrivateRoute path={editParent} component={EditParentDetail} />
					<PrivateRoute path={lessonPlan} component={LessonPlan} />
					<PrivateRoute path={lessonPlanNew} component={LessonPlanNew} />
					<PrivateRoute path={lessonPlanList} component={LessonPlanList} />
					<PrivateRoute path={lessonPlanDetails} component={LessonPlanDetails} />
					<PrivateRoute path={lessonPlanResponse} component={LessonPlanResponse} />
					<PrivateRoute path={createGroup} component={CreateGroup} />
					<PrivateRoute path={parentListing} component={Wrapper} />
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