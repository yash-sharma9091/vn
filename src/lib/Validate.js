/* global _ */
import {decorateNameField} from './Helper';

const Required = (value, allValues, props, name) => {
	return (value ? undefined : `${decorateNameField(name)} is required`);
}
const UAN = (value, allValues, props, name) => {
	return (value ? undefined : 'Unique account number is required');
}
const Email = (value, allValues, props, name) => {
	return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid email address');
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
	return  (value ? (/^([0|[1-9][0-9]{9})$/i.test(_.replace(name, /-|\s|\+1/g, "")) ? undefined : 'Enter a valid number') : undefined );
}	
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength4 = maxLength(4);
const maxLength200 = maxLength(200);
const maxLength400 = maxLength(400);
export{
	Required,
	Email,
	Number,
	maxLength4,
	maxLength200,
	maxLength400,
	UAN,
	Password,
	Alphabets,
	Phone
};