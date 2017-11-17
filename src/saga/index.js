import { takeLatest } from 'redux-saga/effects';
import { AUTH_REQUEST, AUTH_LOGOUT_REQUEST } from '../constant';
import { authorize, logout } from './auth';

function* Saga() {
	yield takeLatest(AUTH_REQUEST, authorize);
	yield takeLatest(AUTH_LOGOUT_REQUEST, logout);
}

export default Saga;