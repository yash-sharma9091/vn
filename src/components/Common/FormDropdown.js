/* global _ */
import React, {Component} from 'react';
import { FormGroup, Label, Col } from 'reactstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
export class FormDropdown extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, valueField, textField, placeholder, colWrapper, col} = this.props;
		
		if( colWrapper ) {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<Col sm={col}>
			          	<DropdownList {...input}
			    		    data={this.empty()}
			    		    valueField={valueField}
			    		    textField={textField}
			    		    placeholder={placeholder}
			    		    onChange={input.onChange} />
		    		</Col>	    
		        </FormGroup>    
			);		
		} else {
			return (
				<FormGroup className={formGroupClassName}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<DropdownList {...input}
		    		    data={this.empty()}
		    		    valueField={valueField}
		    		    textField={textField}
		    		    placeholder={placeholder}
		    		    onChange={input.onChange} />
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
