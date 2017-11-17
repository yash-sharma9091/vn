import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import Logo from  '../Logo/Logo';

class ForgotPassForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
	}
	
  	render() {
		const { error, handleSubmit, pristine, submitting, submitSucceeded} = this.props;
    	return (
     		<div className="login-box light-sm-bg">
				 <div className="login-header">
					 <Logo />
				 </div>
				 <div className="home-copy-right">
					<div className="text-center">
						<div className="copyright-tag text-uppercase">© 2017 COPYRIGHT pencilink</div>
					</div>
				 </div>
				 <div className="login-form" >
					<div className="d-flex flex-row justify-content-center">
					 <Form onSubmit={handleSubmit(this.formSubmit)}  className="col-6">
						<h3 className="gradient-color text-center">Forgot Your Password</h3>
						<p className="text-center light-gray">Enter your email below, and we’ll send you the Reset Link</p>
						<Field 
							component={FormField} type="text"
							name="unique account number" label="Enter Unique Account Number"
							id="unique_account_number" labelClassName="gradient-color"
							placeholder="Enter unique account number" validate={Required} doValidate={true}/>
						
						<FormSubmit 
							error={error} invalid={pristine}
							submitting={submitting} className="btn-block btn-primary"
							buttonSaveLoading="Processing..." buttonSave="Send Reset Link"/>

						<div className="d-flex flex-row justify-content-center p-2">
							<button type="button" className="btn btn-link forgot-link pointer">Back to Login</button>	
						</div>
					</Form>
				   </div>
				 </div>
			</div>
		);
	  }
	  formSubmit(values) {
		console.log(values);
	  }
}

const _ForgotPasswordForm = reduxForm({
  	form: 'ForgotPassForm',
})(ForgotPassForm);

export default _ForgotPasswordForm;