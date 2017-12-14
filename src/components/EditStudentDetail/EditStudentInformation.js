/* global IMAGE_PATH */
import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EditStudentDetail.css';
import ImageCropper from '../Common/ImageCropper';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {handleSubmitFailed} from '../../lib/Helper';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress, ContactNumber} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
let success='';

class EditTeacherInformation extends Component {
    constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.fillFormFields = this.fillFormFields.bind(this);
        //this.resetForm = this.resetForm.bind(this);
        this.state = {
            success: '',
            reset: false,
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
    
    formSubmit(values) {
        console.log(values);
    }
	render() {
        const { error, handleSubmit, teacher} = this.props;
        
        const {profile_image} = teacher;
        let profileImage;
        if( profile_image ) {
            profileImage = `${IMAGE_PATH}/${profile_image.path}`;    
        }
        const options = [
            {value: 'male', name: 'Male'},
            {abbreviation: 'female', name: 'Female'}
        ]
        console.log(success);
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="edit-group-box">
                            <Form onSubmit={handleSubmit}>
                                <Alert alertVisible={error || success} alertMsg={error || success} className={error ? "danger alert-box":"success"}/>
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col-md-3 col-lg-2 inner-cropper">
                                            <Field component={ImageCropper} name="image" logo={profileImage}/>
                                        </div>
                                        <div className="col-md-9 col-lg-10">
                                            <div className="form-row pl-3">
                                                <Field 
                                                    component={FormField} type="text" formGroupClassName="mr-2"
                                                    name="first_name" label="First Name"
                                                    id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>

                                                <Field 
                                                    component={FormField} type="text"
                                                    name="last_name" label="Last Name"
                                                    id="Last_Name" placeholder="Enter last name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>    
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="group-tehead">Personal Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="DOB" label="DOB" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="DOB" placeholder="MM/DD/YYYY" validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Subject</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select Subject</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Gender</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select gender</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="Student Code" label="Student Code" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Student Code" placeholder="Enter code (oss number)" validate={[Required]} doValidate={true}/>
                                         </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Grade</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select Grade</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Official Class</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select grade</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                         </div>
                                    </div>
                                </div>
                                

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="Name" label="Name" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Name" placeholder="Enter name" validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} 
                                                type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9} labelClassName="col-sm-3"
                                                name="Email" label="Email" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Email" placeholder="Enter email" validate={[Required, Email]} doValidate={true}/>    
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="Relation" label="Relation" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Relation" placeholder="Enter Relation" validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} 
                                                type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9} labelClassName="col-sm-3"
                                                name="Phone" label="Phone" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Phone" placeholder="Enter phone" validate={[Required, Email]} doValidate={true}/>    
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="Address" label="Address" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Address" placeholder="Enter Address" validate={[Required]} doValidate={true}/>
                                        </div>
                                    </div>

                                </div>
                            </Form>        
                        </div>
                    </div>
                </div>
            </div>
		) 
	}
}
let _EditTeacherInformation = reduxForm({
    form: 'EditTeacherInformationForm',
    asyncValidate: isValidAddress,
    asyncBlurFields: ['teacher_address'],
    onSubmitFail: handleSubmitFailed,
    onSubmit: (values, dispatch, props) => {
        return new Promise((resolve, reject) => {
            Http.upload('edit_teacher', values)
            .then(({data}) => {
                success = data.message;
                setTimeout(() => {success=''},3000);
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
})(EditTeacherInformation);

export default _EditTeacherInformation;