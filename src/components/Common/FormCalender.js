/* global  moment */
import React, {Component} from 'react';
import { FormGroup, Label } from 'reactstrap';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import momentLocaliser from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';
momentLocaliser(moment);

export class FormCalender extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, placeholder, doValidate} = this.props;
		const {onChange, value} = input;
		if( doValidate ){
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
}

export default FormCalender;
