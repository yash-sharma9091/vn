import React, {Component} from 'react';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FormDropdown from "../Common/FormDropdown";
import FormSubmit from "../Common/FormSubmit";
import FileInput from "../Common/FileInput";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ImageCropper from '../Common/ImageCropper';
import './AddTeachers.css';
import {flattenObject} from '../../lib/Helper';

class RightPart extends Component {
	render() {
		return (
            <div className="right-group">
                <div className="right-group-content">
                    <div className="create-teacher">
                    <div className="p-3 teacher-forms">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <div className="imports-button d-flex justify-content-start">
                                    <button type="button" class="btn btn-info">Cancel</button>
                                </div>
                            </div>
                            <div>
                                <div className="text-uppercase font-weight-bold teach-head">CREATE TEACHER</div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-3 activity-bg">
                        <Form>
                            <div className="tabs-heading text-uppercase font-weight-bold">PERSONAL INFORMATION</div>
                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>First Name</Label>
                                    <Input type="text" name="name" placeholder="Enter name" />
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>Last Name</Label>
                                    <Input type="text" name="name" placeholder="Last name" />
                                </FormGroup>
                            </div>

                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label for="exampleSelect">Gender</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select gender</option>
                                        <option>Select gender</option>
                                        <option>Select gender</option>
                                        <option>Select gender</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label for="exampleSelect">Grade</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select grade</option>
                                        <option>Select grade</option>
                                        <option>Select grade</option>
                                        <option>Select grade</option>
                                    </Input>
                                </FormGroup>
                            </div>

                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label for="exampleSelect">Subjects</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select subject</option>
                                        <option>Select subject</option>
                                        <option>Select subject</option>
                                        <option>Select subject</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label for="exampleSelect">Official Grade</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select official grade</option>
                                        <option>Select official grade</option>
                                        <option>Select official grade</option>
                                        <option>Select official grade</option>
                                    </Input>
                                </FormGroup>
                            </div>

                            <div className="tabs-heading text-uppercase font-weight-bold">contact INFORMATION</div>
                            <div className="form-row ml-1 mb-4">
                                <Field component={ImageCropper} name="image" removeImage={this.removeImage}/>
                            </div>

                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>Address</Label>
                                    <Input type="text" name="name" placeholder="Enter Address" />
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>Country</Label>
                                    <Input type="text" name="name" placeholder="Enter country" />
                                </FormGroup>
                            </div>

                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label for="exampleSelect">State</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Select state</option>
                                        <option>Select state</option>
                                        <option>Select state</option>
                                        <option>Select state</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>City</Label>
                                    <Input type="text" name="name" placeholder="Enter city" />
                                </FormGroup>
                            </div>

                            <div className="form-row">
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>Email</Label>
                                    <Input type="text" name="name" placeholder="Enter email" />
                                </FormGroup>
                                <FormGroup className="col-md-12 col-lg-6">
                                    <Label>Phone</Label>
                                    <Input type="text" name="name" placeholder="Enter phone number" />
                                </FormGroup>
                            </div>

                        </Form>
                    </div>
                    </div>
                </div>
            </div>
		) 
	}
}
let RightPartForm = reduxForm({
    form: 'RightPartForm',
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
})(RightPart);
export default RightPartForm;