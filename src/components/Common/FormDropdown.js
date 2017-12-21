/* global _ */
import React, {Component} from 'react';
import { FormGroup, Label, Col, FormFeedback } from 'reactstrap';
import DropdownList from 'react-widgets/lib/DropdownList';
import 'react-widgets/dist/css/react-widgets.css';
export class FormDropdown extends Component {
	render() {
		const {labelClassName, id, label, formGroupClassName, input, valueField, textField, placeholder, colWrapper, col, doValidate, meta} = this.props;
		
		if( doValidate && colWrapper ) {
			return (
				<FormGroup className={`${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${formGroupClassName}`}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<Col sm={col}>
			          	<DropdownList {...input}
			    		    data={this.empty()}
			    		    valueField={valueField}
			    		    textField={textField}
			    		    placeholder={placeholder}
			    		    onChange={input.onChange} />
			    		{this.FormFeedback()}    
		    		</Col>	    
		        </FormGroup>    
			);		
		} else if( colWrapper ) {
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
		} else if( doValidate ) {
			return (
				<FormGroup className={`${!meta.touched ? null : (meta.error ? 'is-invalid': null)} ${formGroupClassName}`}>
		          	<Label className={labelClassName} for={id}>{label}{this.isRequired()}</Label>
		          	
		          	<DropdownList {...input}
		    		    data={this.empty()}
		    		    valueField={valueField}
		    		    textField={textField}
		    		    placeholder={placeholder}
		    		    onChange={input.onChange} />
		    		{this.FormFeedback()}    
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
	FormFeedback() {
		const {meta, doValidate} = this.props;
		if( doValidate ) {
			return (<FormFeedback>{meta.touched && meta.error ? meta.error : null}</FormFeedback>);
		} else {
			return null
		}
	}
}

export default FormDropdown;
