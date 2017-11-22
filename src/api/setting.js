import {Http} from '../lib/Http';
export function setting() {
	return new Promise((resolve, reject) => {
		Http.get('setting_homepage')
		.then(({data}) => {
			resolve(data);
		})
		.catch(error => reject(error));
	});
}