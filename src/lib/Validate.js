const decorateNameField = (name) => {
	let _name = name.replace(/_/, ' ');
	return _name.charAt(0).toUpperCase() + _name.slice(1);
}
const Required = (value, allValues, props, name) => {
	return (value ? undefined : `${decorateNameField(name)} is Required`);
}
const Email = (value, allValues, props, name) => {
	return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'Invalid email address');
}
const Number = (value, allValues, props, name) => {
	return (/^\d+$/.test(value) ? undefined : 'Enter a valid number');
}	
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
const maxLength4 = maxLength(4)
export{
	Required,
	Email,
	Number,
	maxLength4
};