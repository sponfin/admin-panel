import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import ordersFiltersReducer from "./ordersReducer";

export default combineReducers({
  ordersReducer,
  ordersFiltersReducer,
});
