import {Http} from '../lib/Http';
export function login(url, options={}) {
	return new Promise((resolve, reject) => {
		Http.post(url, options)
		.then(({data}) => {
			resolve({token: data.records.token,user: data.records.user });
		})
		.catch(error => {
			reject((error.response) ? error.response.data : error);
		});
	});
}