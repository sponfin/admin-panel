import { combineReducers } from "redux";
import { orders } from "./orders";
import { filters } from "./filters";
import { pagination } from "./pagination";
import { sort } from "./sort";

export default combineReducers({
  orders,
  filters,
  pagination,
  sort,
});
