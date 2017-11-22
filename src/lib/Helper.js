import {forgotPassword, login, resetPassword} from './SiteLinks';
export const exportPath = (pathname) => pathname.split('/')[1];

export const decorateNameField = (name) => {
	let _name = name.replace(/_|-/, ' ');
	return _name.charAt(0).toUpperCase() + _name.slice(1);
}

export const removePartials = (location) => 
	![login, forgotPassword, resetPassword].map(v => exportPath(v)).includes(exportPath(location.pathname));

export const decorateTitle = (pathname)	=> decorateNameField(exportPath(pathname) === '' ? 'home': exportPath(pathname));

export const networkAlert = () => {
	const alert = document.getElementById("alert");
	alert.className = 'alert alert-danger';
	setTimeout(() => {
		alert.className = 'alert alert-danger d-none';
	}, 5000);
}
