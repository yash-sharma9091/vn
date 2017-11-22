import { takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_LOGOUT_REQUEST, FETCH_SITE_SETTINGS } from '../constant';
import { authorize, logout } from './auth';
import { fetchSiteSettings } from './settings';

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
	yield takeLatest(AUTH_LOGOUT_REQUEST, logout);
	yield takeLatest(FETCH_SITE_SETTINGS, fetchSiteSettings);
}

export default Saga;