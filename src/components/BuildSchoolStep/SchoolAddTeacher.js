import React, {Component} from 'react';
import { Form } from 'reactstrap';
import CameraImage from '../../assets/images/svg/photo-camera.svg';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import TeachersList from './TeachersList';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FileInput from "../Common/FileInput";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import {flattenObject, isJson, isEmptyAnyValue} from '../../lib/Helper';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';

class SchoolAddTeacher extends Component {
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
      	this.fillFormFields = this.fillFormFields.bind(this);
		this.state = {
			success: '',
      		coordinates : {
      			lat: '',
      			lng: ''
      		}
		}
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
    		change('teacher_address', address[0].formatted_address);
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
	render () {
		const { error, handleSubmit, pristine, submitting, initialValues, change} = this.props;
		const { success } = this.state;
        let logo;
  		
  		/*if(!_.isEmpty(profile_image))  {
  			logo = `${IMAGE_PATH}/${profile_image.path}`;
  		}*/
        const options = [
			{value: 'male', name: 'Male'},
			{abbreviation: 'female', name: 'Female'}
		]
		return (
			<div>
				<TeachersList/>
				<Form onSubmit={handleSubmit(this.formSubmit)}>
					<Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger":"success"}/>
					<div className="p-4 light-bg relative">
						<div className="tabs-heading font-weight-bold">Add Teacher</div>
						<div className="form-row">
							<Field component={ImageCropper} name="image" />
						</div>

						<div className="form-row pt-4">
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-4"
								name="first_name" label="First Name"
								id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-4"
								name="last_name" label="Last Name"
								id="Last_Name" placeholder="Enter last name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
							<Field 
								component={FormSelect} formGroupClassName="col-md-4" name="gender" type="select" 
								emptyText="Select gender" label="Gender" options={options}
								displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
						</div>

						<div className="form-row">
							<Field 
								component={FormField} type="email" formGroupClassName="col-md-4"
								name="email_address" label="Email Address"
								id="Email_Address" placeholder="Enter email address" validate={[Required, Email]} doValidate={true}/>
							<Field 
								component={FormSelect} formGroupClassName="col-md-4" name="grade" type="select" 
								emptyText="Select grades" label="Assign Grades"
								displayKey={null} displayLabel={"name"} empty={true} />
							<Field 
								component={FormSelect} formGroupClassName="col-md-4" name="subject" type="select" 
								emptyText="Select subjects" label="Assign Subjects" 
								displayKey={null} displayLabel={"name"} empty={true} />
						</div>

						<div className="form-row">
						    <Field 
								component={FormSelect} formGroupClassName="col-md-4" name="official_grades" type="select" 
								emptyText="Select grade" label="Official Grade (Optional)" 
								displayKey={null} displayLabel={"name"} empty={true} />
						    
							<Field 
							    component={FormField} type="text" formGroupClassName="col-md-4"
							    name="teacher_address" label="Address" placesAutocomplete={true} onSelect={this.handleSelect}
							    id="Teacher_Address" placeholder="Enter address" validate={[Required, maxLength200]} doValidate={true}/>	
							<Field 
								component={FormField} type="text" formGroupClassName="col-md-4"
								name="contact_telephoneno" label="Contact Number"
								id="Contact_Number" placeholder="Enter contact number"
								doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
						</div>


					<div className="row justify-content-center both-button relative">
						<button type="button" className="btn btn-info mr-1">Cancel</button>
						<FormSubmit 
							error={error} invalid={pristine}
							submitting={submitting} className="btn-primary ml-1"
							buttonSaveLoading="Processing..." buttonSave="Save"/>
					</div>
					{/*<button type="button" className="btn btn-link skip-link pointer text-uppercase">Skip</button>*/}

					</div>
				</Form>	
			</div>
		)
	}
	formSubmit(values) {
		console.log(values);
		const {lat, lng} = this.state.coordinates;
		values.lat = lat;
		values.lng = lng;
		return new Promise((resolve, reject) => {
			Http.upload('addteacher', values)
			.then(({data}) => console.log(data))
			.catch(({errors}) =>{
				let _message = {_error: errors.message || 'Internal Server error'};
  				
  				if( errors.hasOwnProperty('email_address') ) {
  					_message = {email_address: errors.email_address.message};
  				}
  				
  				reject(new SubmissionError(_message));
			});
		});
	}
}

let _SchoolAddTeacher = reduxForm({
    form: 'SchoolAddTeacherForm',
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
})(SchoolAddTeacher);

export default _SchoolAddTeacher;