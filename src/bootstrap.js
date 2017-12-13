import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';
import {networkAlert} from './lib/Helper';
import {Cookie} from './lib/Cookie';

/* Global variables */
window.axios = axios;
window._ = lodash;
window.moment = moment;

window.axios.defaults.headers.common = {'X-Requested-With': 'XMLHttpRequest'};
window.axios.defaults.baseURL = ( process.env.NODE_ENV !== 'production') ? 'http://100.100.7.39:7000/api/' : 'http://158.85.76.204:7000/api/';

// Global images url
window.IMAGE_PATH = ( process.env.NODE_ENV !== 'production') ? 'http://100.100.7.39:7000' : 'http://158.85.76.204:7000';

// Add a request interceptor
axios.interceptors.request.use( config => {
  	// Do something before request is sent
    const token = Cookie.get('token'); 
    if( token ) {
      	config.headers = {
        	Authorization: `Bearer ${token}`
      	}
    }
  	return config;
},(error) => Promise.reject(error) );

// Add a response interceptor
axios.interceptors.response.use( response => {
  	// Do something with response data
  	return response;
}, (error) => {
	if(!error.response && error.message === 'Network Error'){
		networkAlert();
	}
	if( error.response ) {
		if( error.response.data ) {
			const {errors} = error.response.data;
			console.log(errors);
			if( errors.code === 'invalid_token' || errors.source.code === "credentials_required") {
				window.location.reload();
			}
		}
	}
	
  	// Do something with response error
  	return Promise.reject(error);
});