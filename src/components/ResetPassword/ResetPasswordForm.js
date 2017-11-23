import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Password} from '../../lib/Validate';
import {login} from '../../lib/SiteLinks';
import Logo from  '../Logo/Logo';
import {LinkContainer} from 'react-router-bootstrap';
import {Http} from '../../lib/Http';
import {connect} from 'react-redux';
import Alert from '../Common/Alert';
import CopyRightText from '../partials/CopyRightText';

class ResetPasswordForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
	}
	
  	render() {
		const { error, handleSubmit, pristine, submitting} = this.props;
		const {success} = this.state;
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
						<Form onSubmit={handleSubmit(this.formSubmit)}  className="col-6">
							<h3 className="gradient-color text-center">Reset Your Password</h3>
							<p className="text-center light-gray">Enter a new password for this account</p>
							<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
							<Field 
								component={FormField} type="password"
								name="new_password" label="New Password"
								id="New_Password" labelClassName="gradient-color"
								placeholder="Enter new password" validate={[Required,Password]} doValidate={true}/>

							<Field 
								component={FormField} type="password"
								name="confirm_password" label="Confirm New Password"
								id="Confirm_Password" labelClassName="gradient-color"
								placeholder="Confirm password" validate={Required} doValidate={true}/>
							
							<FormSubmit 
								error={error} invalid={pristine}
								submitting={submitting} className="btn-block btn-primary"
								buttonSaveLoading="Processing..." buttonSave="Reset Password"/>

							<div className="d-flex flex-row justify-content-center p-2">
								<LinkContainer to={login}>
									<button type="button" className="btn btn-link forgot-link pointer">Cancel</button>	
								</LinkContainer>	
							</div>
						</Form>
				   	</div>
				</div>
			</div>
		);
	}
	formSubmit(values) {
		const {token, dispatch, reset} = this.props;
		return new Promise((resolve, reject) => {
			Http.post(`reset_password/${token}`, values)
			.then(({data}) => {
				console.log(data);
				this.setState({success: data.message});
				dispatch(reset('reset_password')); // Reset the form
				setTimeout( () => {
					this.setState({success: ''});
				},5000);
				resolve();
			})
			.catch(({errors}) => {
				console.log(errors);
				reject(new SubmissionError({_error: errors.message}));
			});
		});
	}
}

const _ResetPasswordForm = reduxForm({
  	form: 'ResetPasswordForm',
  	validate: (values) => {
    	const errors = {};
    	if( values.confirm_password && values.new_password !== values.confirm_password ) {
    		
    		errors.new_password = 'New password and confirm password should match';
    		if( values.confirm_password) {
    			if( values.confirm_password !== values.password ) {
    				errors.confirm_password = 'New password and confirm password should match';
    			}
    		}
    	}
    	
    	return errors;
    },
})(ResetPasswordForm);

function mapStateToProps(state, own_props) {
	if( own_props.match ) {
		return {
  			token: own_props.match.params.token
  		};	
	}
	return {};
  	
}
export default connect(mapStateToProps, null)(_ResetPasswordForm);