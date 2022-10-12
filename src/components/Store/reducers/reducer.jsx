import { combineReducers } from "redux";
import CountriesReducer from "./countryReducer";

const rootReducer = combineReducers({
  Countries: CountriesReducer,
});

export default rootReducer;