import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required} from '../../lib/Validate';
import Logo from  '../Logo/Logo';
import './Login.css';
import {CopyRightText} from '../partials/CopyRightText';
import Alert from '../Common/Alert';
import { AUTH_REQUEST } from '../../constant';
import {connect} from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';
import {join, forgotPassword} from '../../lib/SiteLinks';

class Loginform extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
	}

  	render() {
		const { error, handleSubmit, pristine, submitting} = this.props;

    	return (
     		<div className="login-box light-sm-bg">
				<div className="login-header"> <Logo /> </div>
				<div className="home-copy-right">
					<div className="text-center">
						<div className="copyright-tag text-uppercase"><CopyRightText/></div>
					</div>
				</div>
				<div className="login-form" >
					<div className="d-flex flex-row justify-content-center">
					 	<Form onSubmit={handleSubmit(this.formSubmit)} className="col-6">
					 		<Alert alertVisible={error} alertMsg={error} className={error ? "danger":"success"}/>
							<Field 
								component={FormField} type="text"
								name="uan" label="Unique Account Number*"
								id="Unique_Account_Number" labelClassName="gradient-color"
								placeholder="Enter unique account number" doValidate={true}/>
							
							<Field 
								component={FormField} type="text"
								name="password" label="Password*"
								id="Password" labelClassName="gradient-color"
								placeholder="Enter password" validate={Required} doValidate={true}/>

							<div className="form-group row col-sm-12">
									<div className="form-check">
									<label className="form-check-label">
										<input className="form-check-input" type="checkbox" /> Remember me
									</label>
								</div>
							</div>

							<FormSubmit 
								error={error} invalid={pristine}
								submitting={submitting} className="btn-block btn-primary"
								buttonSaveLoading="Processing..." buttonSave="Login"/>

							<div className="d-flex flex-row justify-content-center p-2">
								<LinkContainer to={forgotPassword}>
									<button type="button" className="btn btn-link forgot-link pointer">Forgot Password?</button>
								</LinkContainer>	
							</div>
							<div className="d-flex flex-row justify-content-center">
								<div className="tags-line p-2">Become a Pilot School.</div>
								<div>
									<LinkContainer to={join}>
										<button type="button" className="btn btn-link click-link pointer">Click Here</button>
									</LinkContainer>	
								</div>
							</div>
						</Form>
				   </div>
				</div>
			</div>
    	);
	}
	formSubmit(values) {
		console.log(values);
		const { dispatch } = this.props;
		return new Promise((resolve, reject) => {
        	dispatch({
          		type: AUTH_REQUEST,
          		user: values,
          		callbackError: (error) => {
            		reject(new SubmissionError({_error: error}));
          		},
          		callbackSuccess: () => {
          			console.log('login success');
            		//dispatch(push('/dashboard'));
            		resolve();
          		}
        	})
      	});
	}
}

const _LoginForm = reduxForm({
  	form: 'LoginForm',
  	validate: (values) => {
    	const errors = {};
    	if(!values.uan) {
      		errors.uan = 'Unique account number is required';
    	}
    	return errors;
    },
})(Loginform);


const mapStateToProps = (state) => {
	if( state.auth.user ) {
		return ({
		 	initialValues: state.auth.user
		});	
	}
	return ({});
}

export default connect(mapStateToProps)(_LoginForm);