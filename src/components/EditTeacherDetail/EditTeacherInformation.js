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
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";

class EditTeacherInformation extends Component {
    constructor() {
        super();
        this.formSubmit = this.formSubmit.bind(this);
        //this.handleSelect = this.handleSelect.bind(this);
        //this.fillFormFields = this.fillFormFields.bind(this);
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
    
    formSubmit(values) {
        console.log(values);
    }
	render() {
        const { error, handleSubmit, pristine, submitting, teacher} = this.props;
        
        const {profile_image} = teacher;
        let profileImage;
        if( profile_image ) {
            profileImage = `${IMAGE_PATH}/${profile_image.path}`;    
        }
        const options = [
            {value: 'male', name: 'Male'},
            {abbreviation: 'female', name: 'Female'}
        ]
		return (
            <div className="left-group">
                <div className="left-group-content">
                    <div className="p-3 p-lg-3">
                        <div className="edit-group-box">
                            <Form onSubmit={handleSubmit(this.formSubmit)}>
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
                                </div>
                                <div className="group-tehead">Personal Information</div>
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
                                </div>

                                <div className="group-tehead"> Contact Information</div>
                                <div className="p-3">
                                    <div className="form-row">
                                        <FormGroup className="col-sm-6">
                                            <div className="form-row form-group">
                                                <div className="col-sm-3">
                                                    <Label for="exampleSelect" >Address</Label>
                                                </div>
                                                <div className="col-sm-9">
                                                    <div className="form-row form-group">
                                                        <input type="text" className="form-control" placeholder="Enter address" />
                                                    </div>
                                                    <div className="form-row form-group">
                                                        <input type="text" className="form-control" placeholder="Enter country" />
                                                    </div>
                                                    <div className="form-row form-group">
                                                        <Input type="select" name="select" id="exampleSelect" className="col-sm-9">
                                                        <option>Select state</option>
                                                        <option>Select state</option>
                                                        <option>Select state</option>
                                                        <option>Select state</option>
                                                        </Input>
                                                    </div>
                                                    <div className="form-row form-group">
                                                        <input type="text" className="form-control" placeholder="Enter city" />
                                                    </div>
                                                </div>
                                            </div>
                                        </FormGroup>

                                        <FormGroup className="col-sm-6">
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Email</Label>
                                                <input type="text" className="form-control" placeholder="Enter email" />
                                            </div>
                                            <div className="form-row form-group">
                                                <Label for="exampleSelect" className="col-sm-3">Phone</Label>
                                                <input type="text" className="form-control" placeholder="Enter phone" />
                                            </div>
                                        </FormGroup>
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
    onSubmitFail: handleSubmitFailed
})(EditTeacherInformation);

export default _EditTeacherInformation;