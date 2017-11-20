import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number} from '../../lib/Validate';
import Logo from  '../Logo/Logo';
import './Change.css';

class ChangePassForm extends Component {
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
						<h3 className="gradient-color text-center">Change Password</h3>
						<p className="text-center light-gray">Enter a new password for this account</p>
						<Field 
							component={FormField} type="text"
							name="old Password" label="Old Password"
							id="old_Password" labelClassName="gradient-color"
							placeholder="**********" validate={Required} doValidate={true}/>
						
						<Field 
							component={FormField} type="text"
							name="New Password" label="New Password"
							id="New_Password" labelClassName="gradient-color"
							placeholder="**********" validate={Required} doValidate={true}/>

						<Field 
							component={FormField} type="text"
							name="Confirm New Password" label="Confirm New Password"
							id="Confirm_New_Password" labelClassName="gradient-color"
							placeholder="**********" validate={Required} doValidate={true}/>
						
						<FormSubmit 
							error={error} invalid={pristine}
							submitting={submitting} className="btn-block btn-primary"
							buttonSaveLoading="Processing..." buttonSave="Save"/>

                        {/* <div className="form-group">
                            <label className="d-block gradient-color" htmlFor="exampleInputEmail1">Old Password</label>
                            <input type="password" className="form-control" aria-describedby="emailHelp" placeholder="" />
                        </div>
                        <div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1">New Password</label>
                            <input type="password" className="form-control" placeholder="**********" />
                        </div>
						<div className="form-group">
                            <label className="gradient-color" for="exampleInputPassword1">Confirm New Password</label>
                            <input type="password" className="form-control" placeholder="**********" />
                        </div> */}
						{/* <button type="button" className="btn btn-block btn-primary">Save</button> */}

						<div className="d-flex flex-row justify-content-center p-2">
							<button type="button" className="btn btn-link forgot-link pointer">Cancel</button>	
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

const _ChangePasswordForm = reduxForm({
  	form: 'ChangePassForm',
})(ChangePassForm);

export default _ChangePasswordForm;