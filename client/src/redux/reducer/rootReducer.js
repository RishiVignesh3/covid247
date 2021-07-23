import { combineReducers } from "redux";

import hospitalReducer from "./hospital_reducer";
import DashBoardReducer from "./DashBoardReducer";
import PharmacyReducer from "./PharmacyReducer";
import ConsultationReducer from "./ConsultationReducer";

const rootReducer = combineReducers({
  hospital: hospitalReducer,
  dashboard:DashBoardReducer,
  pharmacy:PharmacyReducer,
  consultation:ConsultationReducer
});

export default rootReducer;
