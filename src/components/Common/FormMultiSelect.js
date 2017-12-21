/* global _ */
import React, {Component} from 'react';
import { FormGroup, FormFeedback } from 'reactstrap';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';
export class FormMultiSelect extends Component {
	render() {
		const {textField, onSearch, valueField, formGroupClassName, input, placeholder, busy, data} = this.props;
		const {onChange, onFocus, value, name} = input;
		console.log(input);
		return (
			<FormGroup className={formGroupClassName}>	          	
	          	<Multiselect
	          		onChange={onChange}
        			busy={busy}
        		    data={data}
        		    placeholder={placeholder}
        		    textField={textField}
        		    valueField={valueField}
					onSearch={onSearch}
        		/>
	        </FormGroup>    
		);		
		
	}
	isRequired() {
		const {isRequired} = this.props;
		if( isRequired ) {
			return (<span className="asterisk-required">*</span>)
		} else {
			return null
		}
	}
	empty() {
		const {empty, emptyText, label, data, valueField, textField} = this.props;
		
		if( empty && _.isArray(data) ) {
			if(  data.length > 0 ) {
				if( !_.isNull (data[0][valueField]) ) {
					data.unshift({ [valueField]: null, [textField]: emptyText || label });
				}
			}
		}
		
		return data;
	}
	FormFeedback() {
		const {meta, doValidate} = this.props;
		if( doValidate ) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
}

export default FormMultiSelect;
