/* global _ */
import React, { Component } from 'react';
import CameraImage from '../../assets/images/svg/photo-camera.svg';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, maxLength4,maxLength200,maxLength400} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';

class SchoolInfoForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }

  	render() {
  		const { error, handleSubmit, pristine, submitting} = this.props;
  		const options = [
			{abbreviation: 'P', name: 'Public School'},
			{abbreviation: 'R', name: 'Private School'},
			{abbreviation: 'C', name: 'Charter School'},
			{abbreviation: 'A', name: 'Parochia School'},
			{abbreviation: 'other', name: 'Other'}
		], levels = [
			{key: 'k5', value: 'K-5'},
			{key: 'k6', value: 'K-6'},
			{key: 'k8', value: 'K-8'},
			{key: 'k9', value: 'K-9'},
			{key: 'k12', value: 'K-12'}
		];
    	return (
            <div className="row justify-content-between">
                <Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-12">
                    <Alert alertVisible={error} alertMsg={error} className={error ? "danger":"success"}/>

                    <div className="tabs-heading font-weight-bold">General Information</div>
                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="school name" label="School Name"
                            id="schoolname" placeholder="Enter school name" validate={[Required, maxLength200]} doValidate={true}/>
                        <Field 
                            component={FormSelect} formGroupClassName="col-md-6"
                            name="school_type" type="select" emptyText="Select school type"
                            label="Type of School" className="input_both" options={options}
                            displayKey={null} displayLabel={"name"} empty={true}/>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="Total No. of Students" label="Total No. of Students"
                            id="Total_Students" placeholder="Enter students" validate={[Required, maxLength200]} doValidate={true}/>
                        <Field 
                            component={FormSelect} formGroupClassName="col-md-6"
                            name="School Levels" type="select" emptyText="Select levels"
                            label="School Levels" className="input_both" options={options}
                            displayKey={null} displayLabel={"name"} empty={true} />
                    </div>

                    <Field 
                        component={FormField} type="email"
                        name="address" label="Address"
                        id="email" placeholder="Enter Address" validate={[Required,Email]} doValidate={true}/>
                    
                    <div className="form-row">
                        <Field 
                            component={FormSelect} formGroupClassName="col-md-6"
                            name="Country" type="select" emptyText="Enter Country"
                            label="Country" className="input_both" options={options}
                            displayKey={null} displayLabel={"name"} empty={true} />

                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="State" label="State"
                            id="State" placeholder="Enter State" validate={[Required, maxLength200]} doValidate={true}/>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormSelect} formGroupClassName="col-md-6"
                            name="City" type="select" emptyText="Enter City"
                            label="City" className="input_both" options={options}
                            displayKey={null} displayLabel={"name"} empty={true} />

                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="School Code" label="School Code"
                            id="School_Code" placeholder="Enter School Code" validate={[Required, maxLength200]} doValidate={true}/>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <div className="camera-image">
                                <div className="camera-icon">
                                    <img src={CameraImage} />
                                </div>
                                <a className="delete-button-image"><img src={DeleteImage} /></a>
                                <a className="edit-button-image"><img src={EditImage} />
                                    <input type="file" className="form-control-file" id="upload-photo" />
                                </a>
                            </div>
                            <div className="camera-upload-content">
                                <h3 className="text-uppercase">Upload school logo</h3>
                                <span>maximum image size 5 mb.</span>
                            </div>
                        </div>
                    </div>

                    <div className="tabs-heading font-weight-bold">Contact Information</div>
                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="Contact Name" label="Contact Name"
                            id="Contact_Name" placeholder="Enter Name" validate={[Required, maxLength200]} doValidate={true}/>
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="Email Address" label="Email Address"
                            id="Email_Address" placeholder="Enter email address" validate={[Required, maxLength200]} doValidate={true}/>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="contact_telephoneno" label="Contact Telephone Number"
                            id="ContactTelephoneNumber" placeholder="Enter contact telephone number"
                            doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="school_telephoneno" label="School Telephone Number"
                            id="SchoolTelephoneNumber" placeholder="Enter school telephone number"
                            doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
                    </div>

                    <div className="row justify-content-center both-button">
                        <button type="button" className="btn btn-info mr-1">Cancel</button>
                        
                        <FormSubmit 
                            error={error} invalid={pristine}
                            submitting={submitting} className="btn-primary ml-1"
                            buttonSaveLoading="Processing..." buttonSave="Save"/>
                    </div>

                </Form>
            </div>
    	);
  	}
  	isJson(str) {
	    try {
	        JSON.parse(str);
	    } catch (e) {
	        return false;
	    }
	    return true;
	}
  	formSubmit(values) {
  		const {dispatch, reset, showThanks} = this.props;
  		if( _.has(values, 'contact_telephoneno') ) {
  			values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_telephoneno') ) {
  			values.school_telephoneno = _.replace(values.school_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_type') ) {
  			values.school_type = this.isJson(values.school_type) ? JSON.parse(values.school_type) : values.school_type;
  		}
  		return new Promise((resolve, reject) => {
  			Http.post('signupSchool', values)
  			.then(({data}) => {
  				dispatch(reset('signupForm'));
  				showThanks();
  				resolve();
  			})
  			.catch(({errors}) => {
  				let _message = {_error: errors.message || 'Internal Server error'};
  				
  				if( errors.hasOwnProperty('email_address') ) {
  					_message = {email_address: errors.email_address.message};
  				}
  				
  				reject(new SubmissionError(_message));
  			});
  		});
  	}
}

const flattenObject = (c, d = '.') => {
  const r = {};
  (function f(o, p) {
      Object.keys(o).forEach(k => (o[k] && typeof o[k] === 'object' ? f(o[k], p ? `${p}${d}${k}` : k) : (r[p ? `${p}${d}${k}` : k] = o[k])));
  }(c));
  return r;
};

const _SchoolInfoForm = reduxForm({
  	form: 'signupForm',
  	validate: (values) => {
    	const errors = {};
    	if(!values.contact_telephoneno) {
      		errors.contact_telephoneno = 'Contact number is required';
    	}  else if(!/^([0|[1-9][0-9]{9})$/i.test(_.replace(values.contact_telephoneno, /-|\s|\+1/g, ""))) {
    		errors.contact_telephoneno = 'Enter valid number';
    	}
    	return errors;
    },
    onSubmitFail: (errors) => {
    	// https://github.com/erikras/redux-form/issues/2365
    	const errorEl = document.querySelector(
    		// flattenObject: https://github.com/hughsk/flat/issues/52
    		Object.keys(flattenObject(errors)).map(fieldName => `[name="${fieldName}"]`).join(',')
  		);
  		
  		if (errorEl && errorEl.focus) {
  			errorEl.focus();
  		} else {
  			window.scrollTo(0, 0);
  		}
    }
})(SchoolInfoForm);

export default _SchoolInfoForm;