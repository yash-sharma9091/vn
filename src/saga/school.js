import { call, put } from "redux-saga/effects";
import {school} from '../api/school';
import {  FETCH_SCHOOL_INFO } from '../constant';

export function* fetchSchoolInfo(action) {
	console.log('okkkk');
	try {
	   	const settings = yield call(school);
		yield put({ type: FETCH_SCHOOL_INFO, school });
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		action.callbackError(errors);
	}
}
