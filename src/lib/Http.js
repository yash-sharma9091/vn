/* global axios, _ */
export class Http {
	static post(url, data) {
		return new Promise((resolve, reject) => {
			axios.post(url, data)
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
				let _error = (error) ? {errors:{message: error.message}} : {errors:{message: 'Unknown Server Error!!'}};
				if( error.response ) {
					_error = error.response.data;
				}
				
				reject(_error);
			});
		});
	}
	static delete(url) {
		return new Promise((resolve, reject) => {
			axios.delete(url)
			.then(({data}) => {
				resolve({data: data.records });
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
	static upload(url, data) {
		let formData = new FormData();
		for( let val in data ) {
			if( _.isObject(data[val]) ) {
				formData.append(val, JSON.stringify(data[val]));	
			} else {
				formData.append(val, data[val]);	
			}
			if( val === 'image' ) {
				if( data.image ) {
					formData.append('image', data.image);		
				}
			}
		}
		
		const config = {
            headers: { 'content-type': 'multipart/form-data' }
        };
        return new Promise((resolve, reject) => {
			axios.post(url, formData, config)
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
}