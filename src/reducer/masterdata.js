import { MASTER_DATA } from '../constant';
const initialState = {
};

export const masterReducer = (state = initialState, { type, master }) => {
    switch (type) {
    	case MASTER_DATA: {
      		return { ...state, ...master };
    	}
    	default:
      		return state;
  	}
};