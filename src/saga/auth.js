import { call, put } from 'redux-saga/effects';
import {login, updateSchoolProfile} from '../api/login';
import {  AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT, PROFILE_UPDATE } from '../constant';
import {Cookie} from '../lib/Cookie';

export function* authorize(action) {
	try {
	   	const { token, user } = yield call(login, 'loginSchool', action.user);
		yield put({ type: AUTH_SUCCESS, payload: token, user });
		
		Cookie.set('token', token, 1);
		Cookie.set('user', user, 1);
		if( action.user.remember_me ) {
			Cookie.set('rememberMe', {uan: action.user.uan, remember_me: true}, 7); // Remeber User uan for 7 days
		} else {
			Cookie.delete('rememberMe');
		}
		action.callbackSuccess();
	} catch (error) {
		const {errors} = error;
		yield put({ type: AUTH_FAILURE, payload: errors.message });
		Cookie.delete('token');
		action.callbackError(errors.message);
	}
}

export function* updateProfile(action) {
	try {
	   	let {user, message} = yield call(updateSchoolProfile, action.user);
		yield put({ type: PROFILE_UPDATE, user });
		Cookie.set('user', user, 1);
		action.callbackSuccess(message);
	} catch (error) {
		action.callbackError(error);
	}
}

export function* logout(action) {
	Cookie.delete('token');
	Cookie.delete('user');
	yield put({ type: AUTH_LOGOUT });
	action.callbackSuccess();
}