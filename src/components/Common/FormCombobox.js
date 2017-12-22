/* global _ */
import React, {Component} from 'react';
import { FormGroup, FormFeedback, Label } from 'reactstrap';
import Combobox from 'react-widgets/lib/Combobox'
import 'react-widgets/dist/css/react-widgets.css';
export class FormCombobox extends Component {
	render() {
		const {textField, onSearch, valueField, formGroupClassName, input, placeholder, busy, data, label, labelClassName, ListItem, meta} = this.props;
		const {onChange, onFocus, value, name} = input;
		return (
			<FormGroup className={`${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${formGroupClassName}`}>
		          	<Label className={labelClassName}>{label}{this.isRequired()}</Label>
		          	
		          	<Combobox
		    		    data={data}
		    		    busy={busy}
		    		    valueField={valueField}
		    		    textField={textField}
		    		    placeholder={placeholder}
		    		    itemComponent={ListItem}
		    		    onSelect={onChange}
		    		    onChange={onSearch} />
	    		    {this.FormFeedback()}    
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

export default FormCombobox;
