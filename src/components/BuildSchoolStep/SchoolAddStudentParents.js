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

class SchoolAddStudentParents extends Component {
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
			<div className="p-2 relative">
                <div className="tabs-heading font-weight-bold">Student Information</div>
                <div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="First Name" label="First Name"
						id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="Last Name" label="Last Name"
						id="Last Name" placeholder="Enter last name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
				</div>

                <div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="DOB" label="DOB"
						id="DOB" placeholder="MM/DD/YYYY" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Grade" type="select" 
						emptyText="Select Grade" label="Grade" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

                <div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="Student Code" label="Student Code"
						id="Student_Code" placeholder="Enter code (OSS Number)" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Gender" type="select" 
						emptyText="Select Gender" label="Gender" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

                <div className="form-row">
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Offical Grade" type="select" 
						emptyText="Select Offical Grade" label="Offical Grade" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>
                    
				<div className="form-row pt-2">
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

                <div className="tabs-heading font-weight-bold pt-4">Parents Information</div>
				<div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="First Name" label="First Name"
						id="First_Name" placeholder="Enter first name" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Gender" type="select" 
						emptyText="Select  Relation" label="Relation" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

                <div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="State" label="State"
						id="State" placeholder="Enter address" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Gender" type="select" 
						emptyText="Select Country" label="Country" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

                <div className="form-row">
                    <Field 
						component={FormSelect} formGroupClassName="col-md-6" name="State" type="select" 
						emptyText="Select Country" label="Country" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
					<Field 
						component={FormSelect} formGroupClassName="col-md-6" name="Gender" type="select" 
						emptyText="Select City" label="City" className="input_both" 
						displayKey={null} displayLabel={"name"} empty={true} />
				</div>

                <div className="form-row">
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="Email Address" label="Email Address"
						id="Email_Address" placeholder="Enter email address" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
					<Field 
						component={FormField} type="text" formGroupClassName="col-md-6"
						name="Phone Number" label="Phone Number"
						id="Phone_Number" placeholder="Enter phone number" validate={[Required, Alphabets, maxLength200]} doValidate={true}/>
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

let _SchoolAddStudentParents = reduxForm({
    form: 'SchoolAddStudentParentsForm',
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
})(SchoolAddStudentParents);

export default _SchoolAddStudentParents;