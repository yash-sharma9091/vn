import { takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_LOGOUT_REQUEST, FETCH_SITE_SETTINGS, FETCH_SCHOOL_INFO } from '../constant';
import { authorize, logout } from './auth';
import { fetchSiteSettings } from './settings';
import { fetchSchoolInfo } from './school';

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
	yield takeLatest(AUTH_LOGOUT_REQUEST, logout);
	yield takeLatest(FETCH_SITE_SETTINGS, fetchSiteSettings);
	yield takeLatest(FETCH_SCHOOL_INFO, fetchSchoolInfo);
}

export default Saga;