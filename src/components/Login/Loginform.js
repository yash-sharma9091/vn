import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Logo from  '../Logo/Logo';
import './Login.css';

class Loginform extends Component {
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
					 <Form onSubmit={handleSubmit(this.formSubmit)} className="col-6">
						<Field 
							component={FormField} type="text"
							name="Unique Account Number" label="Unique Account Number*"
							id="Unique_Account_Number" labelClassName="gradient-color"
							placeholder="Enter unique account number" validate={Required} doValidate={true}/>
						
						<Field 
							component={FormField} type="text"
							name="Password" label="Password*"
							id="Password" labelClassName="gradient-color"
							placeholder="Enter password" validate={Required} doValidate={true}/>

                        {/* <div className="form-group">
                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1"></label>
                            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1"></label>
                            <input type="password" className="form-control" placeholder="" />
                        </div> */}

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
							<button type="button" className="btn btn-link forgot-link pointer">Forgot Password?</button>
						</div>
						<div className="d-flex flex-row justify-content-center">
							<div className="tags-line p-2">Become a Pilot School.</div>
							<div><button type="button" className="btn btn-link click-link pointer">Click Here</button></div>
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

const _LoginForm = reduxForm({
  	form: 'LoginForm',
})(Loginform);

export default _LoginForm;