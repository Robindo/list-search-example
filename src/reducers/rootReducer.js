import { FETCH_DETAILS, FETCH_LIST } from '../types/postTypes';

const initialState = {
  list: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return {
        ...state,
        list: action.payload
      };
      break;
    case FETCH_LIST:
      return {
        ...state,
        list: action.payload
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;
