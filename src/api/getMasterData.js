import {Http} from '../lib/Http';
export const getMasterData = (projection = null) => {
	return new Promise((resolve, reject) => {
		Http.get(`get_master_data?projection=${projection}`)
		.then(({data}) => resolve(data))
		.catch(({errors}) => reject(errors.message));	
	});
}