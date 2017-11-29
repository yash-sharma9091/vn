/* global _ */
import React, {Component} from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
export class FormDropdown extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, valueField, textField, placeholder} = this.props;
		
		return (
			<FormGroup className={formGroupClassName}>
	          	<Label className={labelClassName} for={id}>{label}</Label>
	          	
	          	<DropdownList {...input}
	    		    data={this.empty()}
	    		    valueField={valueField}
	    		    textField={textField}
	    		    placeholder={placeholder}
	    		    onChange={input.onChange} />
	        </FormGroup>    
		);		
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
}

export default FormDropdown;
