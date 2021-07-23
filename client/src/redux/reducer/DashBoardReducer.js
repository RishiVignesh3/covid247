import * as actionTypes from '../actions/actionTypes'

const initialValues = {
  logged: false,
};

const DashBoardReducer = (state = initialValues, action) => {
  switch (action.type) {
    case actionTypes.LOGGED:
      return {
        ...state,
        logged: action.login,
      };
    default:
      break;
  }

  return state;
};

export default DashBoardReducer
