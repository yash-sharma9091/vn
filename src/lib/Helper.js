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

export const isEmptyAnyValue = (obj) => Object.values(obj).some(el => el === null);

export const placesServiceStatus = [
	{ status_code: "ERROR", message: "There was a problem contacting the Google servers" },
	{ status_code: "INVALID_REQUEST", message: "This address was invalid" },
	{ status_code: "OVER_QUERY_LIMIT", message: "The webpage has gone over its request quota" },
	{ status_code: "NOT_FOUND", message: "The referenced location was not found in the Places database"},
	{ status_code: "REQUEST_DENIED", message: "The webpage is not allowed to use the PlacesService"},
	{ status_code: "UNKNOWN_ERROR", message: "The PlacesService request could not be processed due to a server error. The request may succeed if you try again"},
	{ status_code: "ZERO_RESULTS", message: "No result was found for this address"}
];

export const limitTo = (text, length = 200) => {
	if( text && typeof(text) === 'string' ) {
		return text.length < length ? text : text.substr(1, length) + '...';	
	}
	return text;
}

//export const formatBytes = (a,b) => {if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+" "+e[f]}