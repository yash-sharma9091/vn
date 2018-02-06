/* global  moment */
import React, {Component} from 'react';
import { FormGroup, Label } from 'reactstrap';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
import { FormFeedback, Col } from 'reactstrap';
momentLocaliser(moment);

export class FormCalender extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, placeholder, doValidate, meta, colWrapper, col} = this.props;
		const {onChange, onFocus, value, name} = input;
		
		if( doValidate && colWrapper ){
			return (
				<FormGroup className={`${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${formGroupClassName}`}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<Col sm={col}>
			          	<DateTimePicker 
			          		onChange={onChange}
			          		onFocus={onFocus}
			          		name={name}
		    				format="MM/DD/YYYY"
			          	    defaultValue={new Date()}
			          	    time={false}
			          	    placeholder={placeholder}
			          	    inputProps={{className: 'is-invalid'}}
			          	    value={!value ? null : new Date(value)}
			          	/>
			          	{this.FormFeedback()}
		          	</Col>	
		        </FormGroup>    
			);		
		} else if( doValidate ){
			return (
				<FormGroup className={`${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${formGroupClassName}`}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<DateTimePicker 
		          		onChange={onChange}
		          		onFocus={onFocus}
			          	name={name}
	    				format="MM/DD/YYYY"
		          	    defaultValue={new Date()}
		          	    time={false}
		          	    placeholder={placeholder}
		          	    inputProps={{className: 'is-invalid'}}
		          	    value={!value ? null : new Date(value)}
		          	/>
		          	{this.FormFeedback()}
		        </FormGroup>    
			);		
		} else {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}</Label>
		          	
		          	<DateTimePicker 
		          		onChange={onChange}
	    				format="DD MMM YYYY"
		          	    defaultValue={new Date()}
		          	    time={false}
		          	    placeholder={placeholder}
		          	    inputProps={{className: 'is-invalid'}}
		          	    value={!value ? null : new Date(value)}
		          	/>
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
		const {meta, doValidate} = this.props;
		//console.log(meta);
		if( doValidate ) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
}

export default FormCalender;
