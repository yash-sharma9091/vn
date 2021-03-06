/* global _ */
import {decorateNameField, placesServiceStatus} from './Helper';
import { geocodeByAddress } from 'react-places-autocomplete';

const Required = (value, allValues, props, name) => {
	return (value ? undefined : `${decorateNameField(name)} is required`);
}
const ContactNumber = (value, allValues, props, name) => {
	return (value ? undefined : 'Contact number is required');
}
const UAN = (value, allValues, props, name) => {
	return (value ? undefined : 'Email or username is required');
}
const Email = (value, allValues, props, name) => {
	return (value ? (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid email address') : undefined );
}
const Alphabets = (value, allValues, props, name) => {
	return (/^[a-zA-Z .]+$/i.test(value) ? undefined : 'Only alphabets are allowed');
}

const Password = (value, allValues, props, name) => {
	return (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(value) ? undefined : 'Password must contain at least 8 characters, at least one number and both lowercase and uppercase letters and special characters');
}
const Number = (value, allValues, props, name) => {
	return  (value ? (/^\d+$/.test(value) ? undefined : 'Enter a valid number') : undefined );
}	
const Phone = (value, allValues, props, name) => {
	return  (value ? ( /^([0|[1-9][0-9]{9})$/i.test(_.replace(value, /-|\s|\+1/g, "")) ? undefined : 'Enter a valid number' ) : undefined );
}
const OSIS = (value, allValues, props, name) => {
	return (value ? (/^[a-z0-9]+$/i.test(value) ? undefined : 'Only aplhanumeric characters are allowed'): undefined);
}
const isValidAddress = (value, allValues, props, name) => {
	
	return new Promise((resolve, reject) => {
		if( !value || !name ) {
			resolve();
			return;
		}
		geocodeByAddress(value[name]) 
		.then(result => resolve()) 
		.catch(error => {
			let _error =  _.find(placesServiceStatus, ['status_code', error]), message = 'The request could not be processed due to a server error';
			if( _.has(_error, 'message') ) {
				reject({[name]: _error.message});
			} else {
				reject( {[name]: message});	
			}
		});
	});	
}	
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength4 = maxLength(4);
const maxLength10 = maxLength(10);
const maxLength200 = maxLength(200);
const maxLength400 = maxLength(400);
export{
	Required,
	Email,
	Number,
	maxLength4,
	maxLength10,
	maxLength200,
	maxLength400,
	UAN,
	Password,
	Alphabets,
	Phone,
	isValidAddress,
	ContactNumber,
	OSIS
};