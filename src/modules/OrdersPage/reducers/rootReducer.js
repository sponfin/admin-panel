import { combineReducers } from "redux";
import { orders } from "./orders";
import { filters } from "./filters";
import { pagination } from "./pagination";

export default combineReducers({
  orders,
  filters,
  pagination,
});
