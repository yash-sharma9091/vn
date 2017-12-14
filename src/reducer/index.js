import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {authReducer} from './auth';
import {settingReducer} from './settings';
import {masterReducer} from './masterdata';

import { AUTH_REQUEST } from '../constant';
export const authorize = (uan, password) => ({
  	type: AUTH_REQUEST,
  	payload: { uan, password }
});

const reducer = combineReducers({
	auth: authReducer,
	settings: settingReducer,
	masterdb: masterReducer,
	router: routerReducer,
	form: formReducer
});

export default reducer;