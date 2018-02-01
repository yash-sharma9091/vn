/* global IMAGE_PATH */
import React, {Component} from 'react';
//import TeacherPic from '../../assets/images/student-1.png';
import EnvelopeGray from '../../assets/images/svg/envelope-gray.svg';
import ThreeDots from '../../assets/images/svg/three-dots.svg';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './EditStudentDetail.css';
import ImageCropper from '../Common/ImageCropper';
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {handleSubmitFailed, gender, scrollToByClassName} from '../../lib/Helper';
import {Required, Email, maxLength200, Alphabets, isValidAddress, ContactNumber, OSIS, maxLength10} from '../../lib/Validate';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import {Http} from '../../lib/Http';
import Alert from '../Common/Alert';
import {studentListing} from '../../lib/SiteLinks';
import FormCalender from '../Common/FormCalender';
import {connect} from 'react-redux';
import FormDropdown from "../Common/FormDropdown";
import {push} from 'react-router-redux';
let success='';

class EditTeacherInformation extends Component {
    constructor() {
        super();
        //this.formSubmit = this.formSubmit.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.fillFormFields = this.fillFormFields.bind(this);
        this.removeImage = this.removeImage.bind(this);
        //this.resetForm = this.resetForm.bind(this);
        this.state = {
            success: '',
            reset: false,
            profileImage:''
        }
    }
    handleSelect(address) {
        const {change} = this.props;
        geocodeByAddress(address)
        .then(result => {
            this.fillFormFields(result);
            return getLatLng(result[0])
        })
        .then(({ lat, lng }) => {
            change('lat', lat);
            change('lng', lng);
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
            change('student_address', address[0].formatted_address);
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
    componentDidMount(newProps) {
        const {student} = this.props;
        if(student) {
            const {profile_image} = student;
            if( profile_image ) {
                let profileImage = `${IMAGE_PATH}/${profile_image.path}`; 

                this.setState({profileImage});
            }
        }
    }
    removeImage() {
        this.setState({profileImage:''});
        this.props.change('profile_image',null);
    }
	render() {
        const { error, handleSubmit} = this.props;
        const {additional_health_info} = this.props.masterdata;
        const {profileImage} = this.state;
        
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
                                            <Field component={ImageCropper} name="image" logo={profileImage} removeImage={this.removeImage}/>
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
                                                component={FormCalender} type="text" formGroupClassName="row" 
                                                name="dob" label="DOB" colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                id="DOB" placeholder="DD/MM/YYYY" validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Subject</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select subject</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormSelect} formGroupClassName="row" name="gender" type="select" 
                                                emptyText="Select gender" label="Gender" options={gender}
                                                labelClassName="col-sm-3" colWrapper={true} col={9}
                                                displayKey={"value"} displayLabel={"name"} empty={true} validate={[Required]} doValidate={true}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="osis_number" label="OSIS Number"
                                                id="Student Code" placeholder="Enter code (osis number)" validate={[Required,OSIS,maxLength10]} doValidate={true}/>
                                         </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <div className="form-group row">
                                                <label className="col-sm-3 col-form-label">Class</label>
                                                <div className="col-sm-9">
                                                    <select id="inputState" className="form-control">
                                                        <option selected>Select class</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormDropdown} 
                                                formGroupClassName="row" name="additional_health_info"
                                                label="Additional Health Info "  colWrapper={true} col={9}
                                                data={additional_health_info} placeholder="Select health info"
                                                valueField={"_id"} textField={"name"} empty={true} emptyText="Select health info" 
                                                labelClassName="col-sm-3"/>       
                                         </div>
                                    </div>
                                </div>
                                

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" 
                                                formGroupClassName="row" colWrapper={true} 
                                                labelClassName="col-sm-3" col={8}
                                                name="contact_telephoneno" label="Contact Number" 
                                                id="contact_telephoneno" placeholder="Enter contact number"
                                                maskInput={true} inputAddOn={true} inputAddOnText="+1" />  
                                        </div>
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} 
                                                type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9} labelClassName="col-sm-3"
                                                name="email_address" label="Email Address"
                                                id="Email_Address" placeholder="Enter email address" validate={[Email]} doValidate={true}/>    
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="col-sm-6">
                                            <Field 
                                                component={FormField} type="text" formGroupClassName="row" 
                                                colWrapper={true} col={9}
                                                labelClassName="col-sm-3"
                                                name="student_address" label="Student Address" placesAutocomplete={true} onSelect={this.handleSelect}
                                                id="Student_Address" placeholder="Enter address" validate={[Required]} doValidate={true}/>
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
    form: 'EditStudentInformationForm',
    asyncValidate: isValidAddress,
    asyncBlurFields: ['student_address'],
    onSubmitFail: handleSubmitFailed,
    onSubmit: (values, dispatch, props) => {
        const {_triggerSubmit} = props;
        _triggerSubmit();
        return new Promise((resolve, reject) => {
            Http.upload('edit_student', values)
            .then(({data}) => {
                success = data.message;
                setTimeout(() => {success=''; dispatch(push(studentListing));},3000);
                _triggerSubmit();
                scrollToByClassName('left-group-content');
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


const mapStateToProps = (state) => ({
    masterdata: state.masterdb
})
export default connect(mapStateToProps)(_EditTeacherInformation);