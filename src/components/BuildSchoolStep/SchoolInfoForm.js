/* global _, IMAGE_PATH */
import React, { Component } from 'react';
import { Form } from 'reactstrap';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormDropdown from "../Common/FormDropdown";
import FormSubmit from "../Common/FormSubmit";
import FileInput from "../Common/FileInput";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {flattenObject, isJson, isEmptyAnyValue} from '../../lib/Helper';
import {connect} from 'react-redux';
import ImageCropper from '../Common/ImageCropper';
import { FETCH_SCHOOL_INFO } from '../../constant';

class SchoolInfoForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.handleSelect = this.handleSelect.bind(this);
      	this.fillFormFields = this.fillFormFields.bind(this);
      	this.removeImage = this.removeImage.bind(this);
      	this.state = {
      		success: '',
      		errorMsg: '',
      		school_logo:'',
      		coordinates : {
      			lat: '',
      			lng: ''
      		}
      	}
    }
   
    componentDidMount() {
    	const {initialize} = this.props;
    	const {_id} = this.props.user;
    	Http.get(`getschoolprofile_step?_id=${_id}`)
    	.then(({data}) => {
    		initialize(data);
    		this.setState({school_logo: data.school_logo})
    	})
    	.catch(({errors}) => this.setState({errorMsg: errors.message}))
    }
    handleSelect(address) {
		geocodeByAddress(address)
		.then(result => {
			this.fillFormFields(result);
			return getLatLng(result[0])
		})
		.then(({ lat, lng }) => {
			let request = {
				lat, lng
			}
			this.setState({coordinates: request});
		})
		.catch(err => { throw new SubmissionError(err.message) });
    }
    
    fillFormFields(address) {
    	const {change} = this.props;
    	let componentForm = {
			street_number: 'short_name',
			route: 'long_name',
			locality: 'long_name',
			administrative_area_level_1: 'short_name',
			country: 'long_name',
			postal_code: 'short_name'
		};
    	if( address.length > 0 ) {
    		let address_components = address[0].address_components;
    		change('school_address', address[0].formatted_address);
    		for (var i = 0; i < address_components.length; i++) {
				var addressType = address_components[i].types[0];
				if (componentForm[addressType]) {
					var val = address_components[i][componentForm[addressType]];
					if (addressType === 'administrative_area_level_1' ) {
						change('state', val);
					}
					if (addressType === 'locality') {
						change('city', val);
					}
					if (addressType === 'country') {
						change('country', val);
					}
					if (addressType === 'postal_code') {
						change('postal_code', val);
					}					
				}
			}
    	}
    }
    removeImage() {
    	this.setState({school_logo:''});
    }
  	render() {
  		const { error, handleSubmit, pristine, submitting, change} = this.props;
  		const {success, school_logo, errorMsg} = this.state;
  		let logo;
  		
  		if(!_.isEmpty(school_logo))  {
  			logo = `${IMAGE_PATH}/${school_logo.path}`;
  		}
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
                    <Alert alertVisible={error || errorMsg || success} alertMsg={error || errorMsg || success} className={error || errorMsg ? "danger":"success"}/>

	                    <div className="tabs-heading font-weight-bold">General Information</div>
	                    <div className="form-row">
	                        <Field 
	                            component={FormField} type="text" formGroupClassName="col-md-6"
	                            name="school_name" label="School Name"
	                            id="schoolname" placeholder="Enter school name" validate={[Required, maxLength200]} doValidate={true}/>
	                        <Field 
	                            component={FormDropdown} formGroupClassName="col-md-6"
	                            name="school_type" empty={true} emptyText="Select school type"
	                            label="Type of School" data={options} placeholder="Select school type"
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
                        name="school_address" label="Address" placesAutocomplete={true} onSelect={this.handleSelect}
                        id="schoolAddress" placeholder="Enter address" validate={[Required]} doValidate={true}/>
                    
                    <div className="form-row">
                        <Field 
                            component={FormField} formGroupClassName="col-md-6" readOnly={true}
                            name="country" type="text" id="Country" placeholder="Enter Country"
                            label="Country"/>

                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="state" label="State" readOnly={true}
                            id="State" placeholder="Enter State" />
                    </div>

                    <div className="form-row">
                        <Field 
                            component={FormField} formGroupClassName="col-md-6"
                            name="city" type="text" id="locality"
                            label="City" readOnly={true} />

                        <Field 
                            component={FormField} type="text" formGroupClassName="col-md-6"
                            name="school_code" label="School Code"
                            id="School_Code" placeholder="Enter School Code" validate={[Required, maxLength200]} doValidate={true}/>
                    </div>
                    
                    <div className="form-row">
                        <Field component={ImageCropper} name="image" logo={logo} removeImage={this.removeImage}/>
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
  		
  		const {lat, lng} = this.state.coordinates;
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
		/*if(_.isEmpty(this.state.school_logo)) {
			values.image = null;
		}*/
		
		
		values.lat = lat;
		values.lng = lng;
		//console.log(values);
		return new Promise((resolve, reject) => {
  			Http.upload('profilesetup_step1', values)
  			.then(({data}) => {
  				this.setState({success: 'School information saved successfully!'});
  				setTimeout(() => this.setState({success: ''}) ,5000);
  				window.scrollTo(0, 0);
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

let _SchoolInfoForm = reduxForm({
  	form: 'SchoolInfoForm',
  	asyncValidate: isValidAddress,
  	asyncBlurFields: ['school_address'],
    onSubmitFail: (errors) => {
    	//console.log(errors);
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

const mapStateToProps = (state) => ({
	user: state.auth.user
})

export default connect(mapStateToProps)(_SchoolInfoForm);