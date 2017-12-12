import {Http} from '../lib/Http';
export const getMasterData = () => {
	return new Promise((resolve, reject) => {
		Http.get('get_master_data')
		.then(({data}) => resolve(data))
		.catch(({errors}) => reject(errors.message));	
	});
}