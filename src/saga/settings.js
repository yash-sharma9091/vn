import { call, put } from "redux-saga/effects";
import {setting} from '../api/setting';
import {  SITE_SETTINGS } from '../constant';

export function* fetchSiteSettings(action) {
	try {
	   	const settings = yield call(setting);
		yield put({ type: SITE_SETTINGS, settings });
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		action.callbackError(errors);
	}
}
