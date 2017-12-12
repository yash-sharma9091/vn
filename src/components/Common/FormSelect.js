import React, {Component} from 'react';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';
export class FormSelect extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, type, colWrapper, col} = this.props;
		if( colWrapper ) {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}</Label>
		          	<Col sm={col}>
			          	<Input {...input} type={type} className={this.isInvalid()}>
			          		{this.empty()}
				        	{this.options()}
				        </Input>	
				        {this.formFeedback()}
			        </Col>
		        </FormGroup>    
			);
		} else {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}</Label>
		          	<Input {...input} type={type} className={this.isInvalid()}>
		          		{this.empty()}
			        	{this.options()}
			        </Input>	
			        {this.formFeedback()}
		        </FormGroup>    
			);
		}	
	}
	isInvalid() {
		const {meta, doValidate} = this.props;
		if( doValidate) {
			return (!meta.touched ? null : (meta.error ? 'is-invalid': null))
		} else {
			return null
		}
	}
	formFeedback() {
		const {meta, doValidate} = this.props;
		if( doValidate) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
	options() {
		const { options, displayKey, displayLabel } = this.props;
		return options ? 
			options.map((values, index) => <option key={index} value={displayKey ? values[displayKey]: JSON.stringify(values)}>{values[displayLabel]}</option>)
			: null;
	}

	empty() {
		const {empty, emptyText, label} = this.props;
		return empty ? (<option value="">{emptyText || label}</option>) : null;
	}
}

export default FormSelect;