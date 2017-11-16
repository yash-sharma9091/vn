/* global axios */
export class Http {
	static post(url, data, config = null) {
		return new Promise((resolve, reject) => {
			axios.post(url, data, config)
			.then(({data, paging}) => {
				resolve({data: data.records, paging: data.paging });
			})
			.catch(error => {
				let _error = (error) ? {errors:{message: error.message}} : {errors:{message: 'Unknown Server Error!!'}};
				if( error.response ) {
					_error = error.response.data;
				}
				
				reject(_error);
			});
		});
	}
	static get(url) {
		return new Promise((resolve, reject) => {
			axios.get(url)
			.then(({data}) => {
				resolve({data: data.records,  paging: data.paging });
			})
			.catch(error => {
				console.log(error);
				reject((error.response) ? error.response.data : error);
			});
		});
	}
}