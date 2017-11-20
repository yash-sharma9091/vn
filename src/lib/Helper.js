import {forgotPassword, login, resetPassword} from './SiteLinks';
export const exportPath = (pathname) => pathname.split('/')[1];

export const removePartials = (location) => 
	![login, forgotPassword, resetPassword].map(v => exportPath(v)).includes(exportPath(location.pathname));
