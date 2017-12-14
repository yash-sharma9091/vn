import { call, put } from "redux-saga/effects";
import {getMasterData} from '../api/getMasterData';
import {  MASTER_DATA } from '../constant';

export function* fetchMasterData(action) {
	try {
	   	const master = yield call(getMasterData);
		yield put({ type: MASTER_DATA, master });
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		action.callbackError(errors);
	}
}
