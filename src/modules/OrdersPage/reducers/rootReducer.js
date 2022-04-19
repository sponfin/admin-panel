import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import ordersFiltersReducer from "./ordersFiltersReducer";

export default combineReducers({
  ordersReducer,
  ordersFiltersReducer,
});
