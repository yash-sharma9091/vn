import { SCHOOL_INFO } from '../constant';
import {Cookie} from '../lib/Cookie';
const initialState = {
	school: Cookie.check('user') ? Cookie.get('user') : undefined
};

export const settingReducer = (state = initialState, { type, school }) => {
    switch (type) {
    	case SCHOOL_INFO: {
      		return { ...state, school };
    	}
    	default:
      		return state;
  	}
};