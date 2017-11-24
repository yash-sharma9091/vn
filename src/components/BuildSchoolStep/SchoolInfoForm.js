/* global _ */
import React, { Component } from 'react';
import CameraImage from '../../assets/images/svg/photo-camera.svg';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormDropdown from "../Common/FormDropdown";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {flattenObject, isJson, isEmptyAnyValue} from '../../lib/Helper';
import {connect} from 'react-redux';


class SchoolInfoForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.state = {
      		success: ''
      	}
    }
    
  	render() {
  		const { error, handleSubmit, pristine, submitting, initialValues} = this.props;
  		
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
                            name="school_name" label="School Name"
                            id="schoolname" placeholder="Enter school name" validate={[Required, maxLength200]} doValidate={true}/>
                        <Field 
                            component={FormDropdown} formGroupClassName="col-md-6"
                            name="school_type" empty={true} emptyText="Select school type"
                            label="Type of School" data={options}
                            valueField={"abbreviation"} textField={"name"}/>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="no_of_students" label="Total No. of Students"
                            id="Total_Students" placeholder="Enter students" validate={[Number, maxLength4]} doValidate={true}/>
                        <Field 
                            component={FormDropdown} formGroupClassName="col-md-6"
                            name="school_level" 
                            label="School Levels" data={levels} placeholder="School levels"
                            valueField={"key"} textField={"value"} empty={true} emptyText="School levels"/>
                    </div>

                    <Field 
                        component={FormField} type="text"
                        name="school_address" label="Address" placesAutocomplete={true}
                        id="schoolAddress" placeholder="Enter Address" validate={[Required, maxLength200]} doValidate={true}/>
                    
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
                            name="contact_name" label="Contact Name"
                            id="Contact_Name" placeholder="Enter Name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="email_address" label="Email Address"
                            id="Email_Address" placeholder="Enter email address" validate={[Required, Email]} doValidate={true}/>
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="contact_telephoneno" label="Contact Telephone Number"
                            id="ContactTelephoneNumber" placeholder="Enter contact telephone number"
                            doValidate={true} maskInput={true} inputAddOn={true} validate={[Required, Phone]} inputAddOnText="+1"/>
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
  	
  	formSubmit(values) {
  		
  		//const {dispatch, reset, showThanks} = this.props;
  		if( _.has(values, 'contact_telephoneno') ) {
  			values.contact_telephoneno = _.replace(values.contact_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_telephoneno') ) {
  			values.school_telephoneno = _.replace(values.school_telephoneno, /-|\s|\+1/g, "");
  		}
  		if( _.has(values, 'school_type') ) {
  			values.school_type = isEmptyAnyValue(values.school_type) ? null : values.school_type
  		}
  		if( _.has(values, 'school_level') ) {
  			values.school_level = isEmptyAnyValue(values.school_level) ? null : values.school_level
  		}
  		console.log(values);
  		/*return new Promise((resolve, reject) => {
  			Http.post('signupSchool', values)
  			.then(({data}) => {
  				console.log(data);
  			})
  			.catch(({errors}) => {
  				console.log(errors);
  				let _message = {_error: errors.message || 'Internal Server error'};
  				
  				if( errors.hasOwnProperty('email_address') ) {
  					_message = {email_address: errors.email_address.message};
  				}
  				
  				reject(new SubmissionError(_message));
  			});
  		});*/
  	}
}

let _SchoolInfoForm = reduxForm({
  	form: 'SchoolInfoForm',
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

// You have to connect() to any reducers that you wish to connect to yourself
_SchoolInfoForm = connect(
  state => ({
    initialValues: state.auth.user // pull initial values from account reducer
  }),
)(_SchoolInfoForm)

export default _SchoolInfoForm;