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

export const loadImage = (src) => {
	return new Promise((resolve, reject) => {
		const image = new Image();
		image.onload = () => resolve(src);
		image.onerror = err => reject(err);
		image.src = src;
	});
}

export const flattenObject = (c, d = '.') => {
  const r = {};
  (function f(o, p) {
      Object.keys(o).forEach(k => (o[k] && typeof o[k] === 'object' ? f(o[k], p ? `${p}${d}${k}` : k) : (r[p ? `${p}${d}${k}` : k] = o[k])));
  }(c));
  return r;
}

export const isJson = (str) => {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
