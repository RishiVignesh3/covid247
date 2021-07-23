import * as actionTypes from '../actions/actionTypes'

const initialState = {
    appointment: "",
    patientinfo: "",
    docid:""
  };
   
  const ConsultationReducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GET_APPOINTMENT:
        return {
          ...state,
          appointment: action.payload,
        };
      case actionTypes.GET_PATIENTINFO:
        return {
          ...state,
          patientinfo: action.payload,
        };
      case actionTypes.GET_DOCID:
            return {
              ...state,
              docid: action.payload,
            };
       
      default:
        break;
    }
    return state;
  };
  export default ConsultationReducer;