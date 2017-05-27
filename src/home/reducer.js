import * as actionTypes from './actionTypes';

const initialState = {
  upcoming: [],
}

export default function home(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_UPCOMING_MOVIES:
      if (action.error) {
        return state;
      }
      return {...state, upcoming: action.payload.results};
    default:
      return state;
  }
}
