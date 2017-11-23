import { SITE_SETTINGS } from '../constant';
const initialState = {
};

export const settingReducer = (state = initialState, { type, settings }) => {
    switch (type) {
    	case SITE_SETTINGS: {
      		return { ...state, ...settings };
    	}
    	default:
      		return state;
  	}
};