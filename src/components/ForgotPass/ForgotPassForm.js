import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import Logo from  '../Logo/Logo';
import {LinkContainer} from 'react-router-bootstrap';
import {login} from '../../lib/SiteLinks';
import {UAN} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';

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
		const {success} = this.state;
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
						<p className="text-center light-gray">Enter your unique account number below, and we’ll send you the Reset Link</p>
						<Alert alertVisible={error||success} alertMsg={error||success} className={error ? "danger":"success"}/>
						<Field 
							component={FormField} type="text"
							name="uan" label="Enter Unique Account Number"
							id="unique_account_number" labelClassName="gradient-color"
							placeholder="Enter unique account number" validate={UAN} doValidate={true}/>
						
						<FormSubmit 
							error={error} invalid={pristine}
							submitting={submitting} className="btn-block btn-primary"
							buttonSaveLoading="Processing..." buttonSave="Send Reset Link"/>

						<div className="d-flex flex-row justify-content-center p-2">
							<LinkContainer to={login}>
								<button type="button" className="btn btn-link forgot-link pointer">Back to Login</button>	
							</LinkContainer>	
						</div>
					</Form>
				   </div>
				 </div>
			</div>
		);
	  }
	formSubmit(values) {
		console.log(values);
		const {dispatch, reset} = this.props;
		return new Promise((resolve, reject) => {
			Http.post('forgot_password', values)
			.then(({data}) => {
				console.log(data);
				this.setState({success: data.message});
				dispatch(reset('ForgotPassForm'));
				setTimeout(() => this.setState({success: ''}), 4000);
			})
			.catch(({errors}) => reject(new SubmissionError({_error: errors.message})));
		});
	}
}

const _ForgotPasswordForm = reduxForm({
  	form: 'ForgotPassForm',
})(ForgotPassForm);

export default _ForgotPasswordForm;