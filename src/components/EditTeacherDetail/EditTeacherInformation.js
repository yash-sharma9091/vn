/* global IMAGE_PATH */
import React, {Component} from 'react';
import TeacherPic from '../../assets/images/teacher-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EditTeacherDetail.css';
import ImageCropper from '../Common/ImageCropper';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {handleSubmitFailed} from '../../lib/Helper';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
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
                                    <div className="form-row">
                                        <div className="col-sm-2">
                                            <Field component={ImageCropper} name="image" logo={profileImage}/>
                                        </div>
                                        <div className="col-sm-10">
                                            <div className="form-row">
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
                                        <Field 
                                            component={FormSelect} formGroupClassName="col-sm-6" name="gender" type="select" 
                                            emptyText="Select gender" label="Gender" options={options}
                                            labelClassName="col-sm-3" formRowWrapper={true}
                                            displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>

                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label for="exampleSelect" className="col-sm-3">Subject</Label>
                                                <Input type="select" name="select_subject" id="exampleSelect" className="col-sm-9">
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label for="exampleSelect" className="col-sm-3">Grade</Label>
                                                <Input type="select" name="select_grade" id="exampleSelect" className="col-sm-9">
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                        <div className="form-row">
                                            <Label for="exampleSelect" className="col-sm-3">Official Grade</Label>
                                            <Input type="select" name="official_grade" id="exampleSelect" className="col-sm-9">
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                        </Input>
                                        </div>
                                    </FormGroup>
                                    </div>
                                </div>
                                {/*<div className="group-tehead">Personal Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label for="exampleSelect" className="col-sm-3">Gender</Label>
                                                <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                                <option>Select gender</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                        <div className="form-row">
                                            <Label for="exampleSelect" className="col-sm-3">Subject</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                            <option>Select subject</option>
                                        </Input>
                                        </div>
                                    </FormGroup>
                                    </div>

                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row">
                                                <Label for="exampleSelect" className="col-sm-3">Grade</Label>
                                                <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                                <option>Select grade</option>
                                            </Input>
                                            </div>
                                        </FormGroup>
                                        <FormGroup className="col-sm-6">
                                        <div className="form-row">
                                            <Label for="exampleSelect" className="col-sm-3">Official Grade</Label>
                                            <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                            <option>Select grade</option>
                                        </Input>
                                        </div>
                                    </FormGroup>
                                    </div>
                                </div>*/}

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        {/*<FormGroup className="col-sm-6">
                                            <div className="form-row form-group">
                                                <div className="col-sm-3">
                                                    <Label for="exampleSelect" >Address</Label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <div className="form-row form-group">
                                                        <input type="text" className="form-control" placeholder="Enter address" />
                                                    </div>                                                    
                                                </div>
                                                
                                            </div>
                                        </FormGroup>*/}
                                        <Field 
                                            component={FormField} type="text" formGroupClassName="col-sm-6" formRowWrapper={true} labelClassName="col-sm-3"
                                            name="teacher_address" label="Address" placesAutocomplete={true} onSelect={this.handleSelect}
                                            id="Teacher_Address" placeholder="Enter address" validate={[Required]} doValidate={true}/>
                                        <Field 
                                            component={FormField} type="text" formGroupClassName="col-sm-6" formRowWrapper={true} labelClassName="col-sm-3"
                                            name="email_address" label="Email" placesAutocomplete={true} onSelect={this.handleSelect}
                                            id="Email_Address" placeholder="Enter email" validate={[Required, Email]} doValidate={true}/>    
                                        <Field 
                                            component={FormField} type="text" formGroupClassName="col-sm-6" formRowWrapper={true} labelClassName="col-sm-3"
                                            name="contact_telephoneno" label="Phone" placesAutocomplete={true} onSelect={this.handleSelect}
                                            id="contact_telephoneno" placeholder="Enter phone" validate={[Required]} doValidate={true}/>        
                                        {/*<FormGroup className="col-sm-6">
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Email</Label>
                                                <input type="text" className="form-control" placeholder="Enter email" />
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Phone</Label>
                                                <input type="text" className="form-control" placeholder="Enter phone" />
                                            </div>
                                        </FormGroup>*/}
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