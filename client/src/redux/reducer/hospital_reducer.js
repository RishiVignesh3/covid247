import * as actionTypes from '../actions/actionTypes'


const initialState = {
  searchedItem: "",
  selectedHospital: "",
  updatedHospital: "",
};

const hospitalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.HOSPITAL_CLICKED:
      return {
        ...state,
        selectedHospital: action.payload,
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        searchedItem: action.payload,
      };
    case actionTypes.UPDATE_SEATS:
      return {
        ...state,
        updatedHospital: action.payload,
      };
    default:
      break;
  }
  return state;
};

export default hospitalReducer;
