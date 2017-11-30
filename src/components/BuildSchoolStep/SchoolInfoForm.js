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
import FileInput from "../Common/FileInput";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {flattenObject, isJson, isEmptyAnyValue} from '../../lib/Helper';
import {connect} from 'react-redux';
import ImageModal from '../Common/ImageModal';
import { FETCH_SCHOOL_INFO } from '../../constant';

class SchoolInfoForm extends Component {
	constructor(props) {
      	super(props);
      	this.formSubmit = this.formSubmit.bind(this);
      	this.handleSelect = this.handleSelect.bind(this);
      	this.fillFormFields = this.fillFormFields.bind(this);
      	this.onChange = this.onChange.bind(this);
      	this.toggleModal = this.toggleModal.bind(this);
      	this.getDataUrl = this.getDataUrl.bind(this);
      	this.removeImage = this.removeImage.bind(this);
      	this.state = {
      		success: '',
      		tmpSrc: '',
      		src: '',
      		invalidFile:false,
      		invalidSize:false,
      		showImage: false,
      		coordinates : {
      			lat: '',
      			lng: ''
      		}
      	}
    }
    toggleModal() {
    	this.setState({showImage: false});
    }
    componentDidMount() {
    	const {initialize} = this.props;
    	const {_id} = this.props.user;
    	console.log(_id);
    	Http.get(`getschoolprofile_step?_id=${_id}`)
    	.then(({data}) => initialize(data))
    	.catch(({errors}) => console.log(errors))
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
    onChange(e) {
	    let files;
	    if (e.dataTransfer) {
	      	files = e.dataTransfer.files;
	    } else if (e.target) {
	      	files = e.target.files;
	    }
	    if(files.length === 0) {
	    	return;
	    }
	    if(files[0].size > 5242880) {
	    	this.setState({ invalidSize: true });
	    } else if(!['image/jpeg','image/jpg','image/png','image/gif'].includes(files[0].type)) {
	    	this.setState({ invalidFile: true });
	    } else {
	    	this.setState({ invalidFile: false, invalidSize: false });	
	    	const reader = new FileReader();
	    	reader.onload = (e) => {
	    		this.setState({ tmpSrc: reader.result, showImage: true});	
	    	};
	    	reader.readAsDataURL(files[0]);	
	    }
	   
	    
    }
    getDataUrl(data) {
    	
    	const {blob, dataUrl} = data;
    	const reader = new FileReader();
	    reader.onload = () => {
	      this.setState({ src: reader.result, showImage: false});
	    };
	    
	    reader.readAsDataURL(blob);
	    const {change} = this.props;
	    change("image", blob);
    }
    removeImage() {
    	this.setState({src: ''});
    	const {change} = this.props;
	    change("image", null);	
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
  	render() {
  		const { error, handleSubmit, pristine, submitting, initialValues, change} = this.props;
  		
  		const {src, tmpSrc, showImage, success, invalidFile, invalidSize} = this.state;
  		
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
    		<div>
	            <div className="row justify-content-between">
	                <Form onSubmit={handleSubmit(this.formSubmit)} className="col-sm-12">
	                    <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>

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
	                        id="schoolAddress" placeholder="Enter Address" validate={[Required, maxLength200]} doValidate={true}/>
	                    
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
	                        <div className="form-group">
	                            <div className={`camera-image ${invalidSize ? 'invalidFile':''}`}>
	                                <div className="camera-icon">
	                                    <img src={src || CameraImage} />
	                                </div>
	                                <a className="delete-button-image" onClick={() => this.removeImage()}><img src={DeleteImage} /></a>
	                                <a className="edit-button-image"><img src={EditImage} />
	                                    <input type="file" name="image" onChange={this.onChange} className="form-control-file" id="upload-photo" />
	                                </a>
	                            </div>
	                            <div className="camera-upload-content">
	                                <h3 className="text-uppercase">Upload school logo</h3>
	                                <span className={invalidSize ? "invalidText" : ""}>maximum image size 5 mb.</span>
	                                {invalidFile && <span className="invalidText">upload image of type jpg, jpeg, png or gif</span>}
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
            	<ImageModal open={showImage} src={tmpSrc} toggle={this.toggleModal} setDataUrl={this.getDataUrl}/>
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
		
		values.lat = lat;
		values.lng = lng;
		return new Promise((resolve, reject) => {
  			Http.upload('profilesetup_step1', values)
  			.then(({data}) => {
  				this.setState({success: 'School information saved successfully!'});
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
    	console.log(errors);
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

/*_SchoolInfoForm = connect(
  	state => ({
    	initialValues: state.auth.user // pull initial values from account reducer
  	})
)(_SchoolInfoForm)*/

const mapStateToProps = (state) => ({
	user: state.auth.user
})

export default connect(mapStateToProps)(_SchoolInfoForm);