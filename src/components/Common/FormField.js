import React, { Component } from 'react';
import { FormGroup, Label, Input, FormFeedback, InputGroupAddon, InputGroup, Col } from 'reactstrap';
import InputMask from 'react-input-mask';
import PlacesAutocomplete from 'react-places-autocomplete';

class FormField extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, inputAddOn, inputAddOnText, colWrapper, col} = this.props;
		
		if(  inputAddOn && colWrapper ) {
					
			return (
				<FormGroup className={formGroupClassName}>
					<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
					
					<Col sm={col}>
						<InputGroup>
				          	<InputGroupAddon>{inputAddOnText}</InputGroupAddon>
				          	{this.renderInput()}
			        	</InputGroup>
			        	{this.FormFeedback()}
			        </Col>	
		        </FormGroup>
			);		
		}else if( inputAddOn ) {
			return (
				<FormGroup className={formGroupClassName}>
					<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
					
					<InputGroup>
			          	<InputGroupAddon>{inputAddOnText}</InputGroupAddon>
			          	{this.renderInput()}
		        	</InputGroup>
		        	{this.FormFeedback()}
		        </FormGroup>
			);
		} else if( colWrapper ) {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<Col sm={col}>
			          	{this.renderInput()}
			          	{this.FormFeedback()}
			        </Col>
		        </FormGroup>
			)
		} else {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	{this.renderInput()}
		          	{this.FormFeedback()}
		        </FormGroup>
	    	);
		}
    	
	}
	isRequired() {
		const {isRequired} = this.props;
		if( isRequired ) {
			return (<span className="asterisk-required">*</span>)
		} else {
			return null
		}
	}
	FormFeedback() {
		const {meta, doValidate, maskInput, placesAutocomplete} = this.props;
		if( (doValidate && maskInput) || (doValidate && placesAutocomplete) || doValidate) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
	renderInput() {
		const {meta, input, type, label, placeholder, className, doValidate, id, maskInput, rows, placesAutocomplete, onSelect, readOnly} = this.props;

		if( maskInput ) {
			return ( <InputMask 
				{...input} 
				className={`form-control ${!meta.touched ? null : (meta.error ? 'is-invalid': null)}`} id={id} 
				placeholder={placeholder || label} type={type} 
				mask="999-999-9999" maskChar={null} /> 
			);
		} else if( doValidate && placesAutocomplete )  {
			return (
				<PlacesAutocomplete 
					clearItemsOnError={true} onSelect={onSelect}
					classNames={{autocompleteContainer: 'autocomplete-container', input:`form-control ${className ? className : ''} ${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${meta.asyncValidating ? 'async-validating' : ''}`}}
					inputProps={{...input, placeholder: placeholder}} />
			)	
		} else if(doValidate) {
			return ( <Input 
				{...input} 
				className={className} id={id} 
				placeholder={placeholder || label} type={type} rows={rows}
				valid={!meta.touched ? null : (meta.error ? false: null)} /> 
			);
		} else {
			return ( <Input 
				{...input} 
				className={className} id={id} readOnly={readOnly}
				placeholder={placeholder || label} type={type} rows={rows}/>
			);
		}
	}
	characterCount() {
		const {characterCount} = this.props;
		if(characterCount) {
			return (
				<small class="form-text text-muted text-right">(400/400)</small>
			)
		}
		return null;
	}
}

export default FormField;