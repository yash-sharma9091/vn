/* global _ */
export class Storage {
	static set(item, value) {
		let _value = value;
		if( _.isObject(value) ) {
			_value = JSON.stringify(value);
		}
		localStorage.setItem(`socialProof.${item}`, _value);
	}
	static get(item) {
		let _item = localStorage.getItem(`socialProof.${item}`);
		try {
			return !_.isEmpty(_item) ? JSON.parse(_item) : undefined;
		} catch (e) {
			return !_.isEmpty(_item) ? _item : undefined;
		}
	}
	static remove(item) {
		return localStorage.removeItem(`socialProof.${item}`);
	}
}