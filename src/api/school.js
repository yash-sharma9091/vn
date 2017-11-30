import {Http} from '../lib/Http';
export function school() {
	return new Promise((resolve, reject) => {
		Http.get('getschoolprofile_step')
		.then(({data}) => {
			resolve(data);
		})
		.catch(error => reject(error));
	});
}