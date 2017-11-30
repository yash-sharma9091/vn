import React, {Component} from 'react';
import { Form } from 'reactstrap';
import CameraImage from '../../assets/images/svg/photo-camera.svg';
import DeleteImage from '../../assets/images/svg/delete-button.svg';
import EditImage from '../../assets/images/svg/edit.svg';
import teacherImage from '../../assets/images/teacher.png';
import FormField from "../Common/FormField";
import FormSelect from "../Common/FormSelect";
import FileInput from "../Common/FileInput";
import FormSubmit from "../Common/FormSubmit";
import { Field, SubmissionError,reduxForm } from 'redux-form';
import {Required, Email, Number, Phone, maxLength4,maxLength200,maxLength400, Alphabets, isValidAddress} from '../../lib/Validate';
import {flattenObject, isJson, isEmptyAnyValue} from '../../lib/Helper';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup } from 'reactstrap';

class SchoolAddTeacher extends Component {
	constructor() {
		super();
		this.state = {
			src:''
		}
	}
	render () {
		const { error, handleSubmit, pristine, submitting, initialValues, change} = this.props;
        const {src} = this.state;
		return (
		
		<div>
			<div className="mb-4">
			<div className="teacher-details">
				<div className="d-flex flex-row pt-3 pb-3">
					<div className="col-sm-4 border-right">
					    <div className="d-flex flex-row no-gutters">
							<div className="col-sm-3">
								<div className="te-img">
									<img src={teacherImage} alt="" />
								</div>
							</div>
							<div className="col-sm-9">
							    <div className="te-name">Antoine Langlais</div>
								<div className="te-gender">Male</div>
							</div>
						</div>
					</div>
					<div className="col-sm-4 border-right">
						<div className="d-flex flex-row no-gutters">
							<div className="col-sm-5 te-head">Grades</div>
							<div className="col-sm-7 te-content">E 201</div>
						</div>
						<div className="d-flex flex-row no-gutters">
							<div className="col-sm-5 te-head">Subjects</div>
							<div className="col-sm-7 te-content">E 401, M 201, S 501...</div>
						</div>
						<div className="d-flex flex-row no-gutters">
							<div className="col-sm-5 te-head">Email</div>
							<div className="col-sm-7 te-content">antol@yahoo.com</div>
						</div>
						<div className="d-flex flex-row no-gutters">
							<div className="col-sm-5 te-head">Contact Number</div>
							<div className="col-sm-7 te-content">212-564-4253</div>
						</div>
					</div>
					<div className="col-sm-4">
					    <div className="d-flex flex-column no-gutters">
							<div className="col-sm-12 te-head">Address</div>
							<div className="col-sm-12 te-content">542 W. 27th Street, 4th Floor, New York, NY 10001</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-right">
				<button type="button" className="btn btn-link addMore-link pointer">+ Add More Subject</button>
			</div>
			</div>

			<div className="p-4 light-bg relative">
				<div className="tabs-heading font-weight-bold">Add Teacher</div>
				<div className="form-row">
					<div className="form-group">
						<div className="camera-image">
							<div className="camera-icon">
								<img src={src || CameraImage} />
							</div>
							<a className="delete-button-image" onClick={() => this.removeImage()}><img src={DeleteImage} /></a>
							<a className="edit-button-image"><img src={EditImage} />
								<input type="file" onChange={this.onChange} className="form-control-file" id="upload-photo" />
							</a>
						</div>
						<div className="camera-upload-content">
							<h3 className="text-uppercase">Upload school logo</h3>
							<span>maximum image size 5 mb.</span>
						</div>
					</div>
				</div>

				<div className="form-row pt-4">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-4"
						name="First Name" label="First Name"
						id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-4"
						name="Last_Name" label="Last Name"
						id="Last_Name" placeholder="Enter last name" validate={[Required, Email]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-4" name="Gender" type="select" 
						emptyText="2" label="Select gender" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

				<div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-4"
						name="Email Address" label="Email Address"
						id="Email_Address" placeholder="Enter email address" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-4" name="Gender" type="select" 
						emptyText="Select grades" label="Assign Grades" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
					<Field 
						component={FormSelect} formGroupClassName="col-md-4" name="Gender" type="select" 
						emptyText="Select subjects" label="Assign Subjects" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

				<div className="form-row">
				    <Field 
						component={FormSelect} formGroupClassName="col-md-4" name="Gender" type="select" 
						emptyText="Select grade" label="Official Grade (Optional)" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				    <Field 
						component={FormField} type="text" formGroupClassName="col-md-4"
						name="Email Address" label="Email Address"
						id="Email_Address" placeholder="Enter address" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-4"
						name="Contact Number" label="Contact Number"
						id="Contact_Number" placeholder="Enter contact number"
						doValidate={true} maskInput={true} inputAddOn={true} inputAddOnText="+1"/>
				</div>

				<div className="row justify-content-center both-button relative">
					<button type="button" className="btn btn-info mr-1">Cancel</button>

					<FormSubmit 
						error={error} invalid={pristine}
						submitting={submitting} className="btn-primary ml-1"
						buttonSaveLoading="Processing..." buttonSave="Save"/>
					
					<button type="button" class="btn btn-link skip-link pointer text-uppercase">Skip</button>
				</div>
			</div>
		</div>
		)
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